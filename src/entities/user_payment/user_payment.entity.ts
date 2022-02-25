import { Entity, ManyToOne,  PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType} from "type-graphql";
import { User } from "../user/user.entities";


@ObjectType()
@Entity()
export class User_Payement {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(()=>User)
    @ManyToOne(() => User)     
    user_id!: User;
  
    @Field({nullable:true})
    @Property()
    payment_type!: string;
  
    @Field({nullable:true})
    @Property()
    provider!: string;
  
    @Field()
    @Property()
    account_no!: number;
  
    @Field()
    @Property()
    expiry!: Date;
    @Field()
    @Property()
    country!: string;
  
    @Field()
    @Property()
    createdAt: Date = new Date();
    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

}