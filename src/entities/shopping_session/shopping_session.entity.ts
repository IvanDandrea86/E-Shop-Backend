import { Entity, OneToOne, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType} from "type-graphql";
import { User } from "../user/user.entity";
 import { Shopping_Session_Input } from "./shopping_session.input";


@ObjectType()
@Entity()
export class Shopping_Session extends Base<Shopping_Session> {
    
    @Field(()=>User)
    @OneToOne(() => User)     
    public user!: User;
  
    @Field()
    @Property()
    public total!: number;

    constructor(body:Shopping_Session_Input){
        super(body)
    }
}