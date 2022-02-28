
import { EntityManager, PostgreSqlDriver, SqlEntityManager } from "@mikro-orm/postgresql";
import { Field, ObjectType } from "type-graphql";

export type MyContext={
    em: EntityManager<any> &  SqlEntityManager<PostgreSqlDriver>
}
@ObjectType()
export class ErrorField{

@Field()
field:string;

@Field()
message:string;
constructor (field:string,message:string){
    this.field=field;
    this.message=message;
}

}

