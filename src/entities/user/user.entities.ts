import { Entity,   PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType} from "type-graphql";



@ObjectType()
@Entity()
export class User  {
    @Field()
    @PrimaryKey()
    id!: number;
  
    @Field()
    @Property({ unique: true })
    username!: string;
  
    @Field()
    @Property({ unique: true })
    email!: string;
  
    @Field()
    @Property()
    first_name!: string;
  
    @Field()
    @Property()
    last_name!: string;
  

    @Field({nullable:true})
    @Property()
    telephone!: number;

    @Property()
    password!: string;
  
    @Field()
    @Property()
    createdAt: Date = new Date();
    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

}