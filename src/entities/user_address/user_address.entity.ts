import { Entity, ManyToOne,  PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType} from "type-graphql";
import { User } from "../user/user.entities";


@ObjectType()
@Entity()
export class User_Address  {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(()=>User)
    @ManyToOne(() => User)     
    user_id!: User;
  
    @Field({nullable:true})
    @Property()
    addresse_line1?: string;
  
    @Field({nullable:true})
    @Property()
    addresse_line2?: string;
  
    @Field({nullable:true})
    @Property()
    city?: string;
  
    @Field({nullable:true})
    @Property()
    postal_code?: number;
    @Field({nullable:true})
    @Property()
    country?: string;
  
    @Field()
    @Property()
    createdAt: Date = new Date();
    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
    constructor(user_id:User){
        this.user_id=user_id;
    }

}