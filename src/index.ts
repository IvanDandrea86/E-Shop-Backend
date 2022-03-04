import type { PostgreSqlDriver } from "@mikro-orm/postgresql"; // or any other driver package
import { Options } from "@mikro-orm/core";
import config from "./mikro-orm.config";
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import * as path from "path";
import { MikroORM} from "@mikro-orm/core";
import { buildSchema } from "type-graphql";
import { MyContext } from "./type/type";
import { resolvers } from "./resolver";
import { seedDatabase } from "./helpers/helpers";

async function bootstrap() {
  console.log(`Initializing database connection...`);
  console.log (config)
  const orm = await MikroORM.init<PostgreSqlDriver>(
    config as Options<PostgreSqlDriver>
  );
  const migrator = orm.getMigrator();
  await migrator.createMigration(); 
  await migrator.up(); // runs migrations up to the latest

  console.log(`Setting up the database...`);
  const generator = orm.getSchemaGenerator();
  // remember to create database manually before launching the code
  await generator.dropSchema();
  await generator.createSchema();
  await generator.updateSchema();
  // seed database with some data
   const { defaultUser } = await seedDatabase(orm.em);

  console.log(`Bootstraping schema and server...`);
  const schema = await buildSchema({
    resolvers: resolvers,
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    validate: false,
  });
  const server = new ApolloServer({
    schema,
    context: (): MyContext => ({
      user: defaultUser,
      // create fresh instance of entity manager per request
      // https://mikro-orm.io/docs/identity-map
      entityManager: orm.em.fork(),
    }),
  });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap().catch(console.error);
