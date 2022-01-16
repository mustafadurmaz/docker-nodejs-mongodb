SELECT 'CREATE DATABASE patika_nodejs_bootcamp'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'patika_nodejs_bootcamp')
\gexec

-- DROP TABLE IF EXISTS schools CASCADE;
-- CREATE TABLE schools(
--   id INT8 GENERATED ALWAYS AS IDENTITY,
--   scool_name VARCHAR(255) NOT NULL,
--   detail VARCHAR(255) DEFAULT NULL,
--   city_id INT8 DEFAULT 0,
--   created_at TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
--   created_by INT8 NOT NULL,
--   is_active BOOLEAN DEFAULT TRUE
-- );