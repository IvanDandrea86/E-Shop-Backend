import type { PostgreSqlDriver } from "@mikro-orm/postgresql"; // or any other driver package
import { Options } from "@mikro-orm/core";
import { MikroORM } from "@mikro-orm/core";
import config from "./config/mikro-orm.config";
import "reflect-metadata";
import express from "express";
import { port } from "./const";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolver";

const lunchServer = async () => {
  //Load Mikro-Orm
  const orm = await MikroORM.init<PostgreSqlDriver>(
    config as Options<PostgreSqlDriver>
  );
  //migration
  const migrator = orm.getMigrator();
  await migrator.createMigration(); 
  await migrator.up(); // runs migrations up to the latest
  //Init Express
  const app = express();
  // Load ApolloServer
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolvers,
      validate: true,
      // authChecker:authChecker,
    }),
    introspection: true,
    playground: true,
    context: () => ({ em: orm.em }),
  });
  apolloServer.start().then(() => {
    console.log(`🚀 Graphql running at http://localhost:${port}/graphql`);
    apolloServer.applyMiddleware({ app });
  });
  app.listen(port, () => {
    console.log("server listen at port", port);
  });
};

lunchServer().catch((err) => {
  console.error(err);
});
