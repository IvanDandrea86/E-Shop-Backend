
import { EntityManager} from "@mikro-orm/postgresql";
import { Field, ObjectType } from "type-graphql";


import { User } from "../entities/user/user.entity";

export interface MyContext {
  entityManager: EntityManager;
  user: User;
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

