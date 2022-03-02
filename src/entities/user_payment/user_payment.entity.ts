import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType} from "type-graphql";
import { User } from "../user/user.entity";
import { User_Payment_Input } from "./user_payment.input";


@ObjectType()
@Entity()
export class User_Payment extends Base<User_Payment> {
    
    @Field(()=>User)
    @ManyToOne(() => User,{onDelete:'cascade'})     
    user!: User;
  
    @Field({nullable:true})
    @Property()
    payment_type?: string;
  
    @Field({nullable:true})
    @Property()
    provider?: string;
  
    @Field({nullable:true})
    @Property()
    account_no?: number;
  
    @Field({nullable:true})
    @Property()
    expiry?: Date;
  
constructor(body:User_Payment_Input){
    super(body)
}
}