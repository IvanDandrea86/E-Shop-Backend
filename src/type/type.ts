
import { EntityManager, PostgreSqlDriver, SqlEntityManager } from "@mikro-orm/postgresql";

export type MyContext={
    em: EntityManager<any> &  SqlEntityManager<PostgreSqlDriver>
}