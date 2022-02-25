
import type { PostgreSqlDriver } from '@mikro-orm/postgresql'; // or any other driver package
import { Options } from '@mikro-orm/core';
import { MikroORM } from "@mikro-orm/core";
import config from './mikro-orm.config';

export const loadMikroORM=async()=>{

  const orm = await MikroORM.init<PostgreSqlDriver>(config as Options<PostgreSqlDriver>);
  console.log(orm.em);
}



