import { Entity, ManyToOne,  PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType} from "type-graphql";
import { User } from "../user/user.entities";


@ObjectType()
@Entity()
export class Shopping_Session {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(()=>User)
    @ManyToOne(() => User)     
    user_id!: User;
  
    @Field()
    @Property()
    total!: number;

    @Field()
    @Property()
    createdAt: Date = new Date();
    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

}