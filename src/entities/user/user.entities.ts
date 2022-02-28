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
  
    @Field({nullable:true})
    @Property({nullable:true})
    first_name: string;
  
    @Field({nullable:true})
    @Property({nullable:true})
    last_name: string;
  

    @Field({nullable:true})
    @Property({nullable:true})
    telephone: number;

    @Property()
    password!: string;
  
    @Field()
    @Property()
    createdAt: Date = new Date();
    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(username: string, email: string,password:string) {
        this.username = username;
        this.email = email;
        this.password=password
      }

}