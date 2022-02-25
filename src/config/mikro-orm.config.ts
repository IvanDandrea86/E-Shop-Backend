
import {__prod__,MIKRO_ORM_DB_NAME, MIKRO_ORM_PASSWORD, MIKRO_ORM_USER, MIKRO_ORM_HOST, MIKRO_ORM_PORT	} from "../const"

export default {
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',  
    tableName: 'mikro_orm_migrations', // migrations table name
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // run each migration inside transaction
    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)
    allOrNothing: true, // run all migrations in current batch in master transaction
    emit: 'ts', // migration generation mode 
  },
  entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
  entitiesTs: ['./src/entities'],
  dbName : MIKRO_ORM_DB_NAME,
  type: 'postgresql',
  password: MIKRO_ORM_PASSWORD,
  user:MIKRO_ORM_USER,
  port:MIKRO_ORM_PORT	,
  host:MIKRO_ORM_HOST,
  debug: !__prod__,
};

