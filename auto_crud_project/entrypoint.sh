#!/usr/bin/env bash
set -e

# 1) Esperar a que la base de datos esté lista
until pg_isready -h "${DB_HOST:-db}" -p "${DB_PORT:-5432}" > /dev/null 2>&1; do
  echo "Esperando a la base de datos en ${DB_HOST:-db}:${DB_PORT:-5432}..."
  sleep 1
done

# 2) Verificar si la tabla alembic_version existe
if ! psql "$DATABASE_URL" -tAc "SELECT to_regclass('alembic_version');" | grep -q alembic_version; then
  echo "Tabla alembic_version no encontrada. Inicializando migraciones..."
  
  # Si existe la carpeta migrations, la borramos para evitar problemas
  if [ -d "migrations" ]; then
    echo "Eliminando carpeta migrations existente..."
    rm -rf migrations
  fi
  
  # Inicializar migraciones desde cero
  flask db init
  flask db migrate -m "Initial migration"
  flask db upgrade
else
  echo "Tabla alembic_version encontrada. Verificando estado..."
  # Intentar obtener la versión actual
  CURRENT_VERSION=$(psql "$DATABASE_URL" -tAc "SELECT version_num FROM alembic_version;")
  
  if [ -z "$CURRENT_VERSION" ]; then
    echo "No hay versión en alembic_version. Limpiando y reinicializando..."
    psql "$DATABASE_URL" -c "DROP TABLE alembic_version;"
    
    # Si existe la carpeta migrations, la borramos para evitar problemas
    if [ -d "migrations" ]; then
      echo "Eliminando carpeta migrations existente..."
      rm -rf migrations
    fi
    
    # Inicializar migraciones desde cero
    flask db init
    flask db migrate -m "Initial migration"
    flask db upgrade
  else
    echo "Versión actual: $CURRENT_VERSION"
    # Intentar aplicar migraciones existentes
    flask db upgrade || {
      echo "Error al aplicar migraciones. Reinicializando..."
      # Borrar la tabla alembic_version
      psql "$DATABASE_URL" -c "DROP TABLE alembic_version;"
      
      # Si existe la carpeta migrations, la borramos para evitar problemas
      if [ -d "migrations" ]; then
        echo "Eliminando carpeta migrations existente..."
        rm -rf migrations
      fi
      
      # Inicializar migraciones desde cero
      flask db init
      flask db migrate -m "Initial migration"
      flask db upgrade
    }
  fi
fi

# 3) Sembrar datos si la tabla 'courses' está vacía
if ! psql "$DATABASE_URL" -tAc "SELECT to_regclass('courses');" | grep -q courses; then
  echo "Tabla 'courses' no existe. Ejecutando seeder..."
  flask seed
else
  # Verificar si la tabla está vacía
  if [ -z "$(psql "$DATABASE_URL" -tAc "SELECT 1 FROM courses LIMIT 1;")" ]; then
    echo "Tabla 'courses' está vacía. Ejecutando seeder..."
    flask seed
  else
    echo "Datos ya existen. Omitiendo seeder."
  fi
fi

# 4) Arrancar Flask
echo "Iniciando servidor Flask..."
exec flask run --host=0.0.0.0