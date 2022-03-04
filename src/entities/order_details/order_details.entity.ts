import { Entity, OneToOne,  Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Payment_Details } from "../payment_details/payment_details.entity";
import { User } from "../user/user.entity";
import { Order_Details_Input } from "./order_details.input";

@ObjectType()
@Entity()
export class Order_Details extends Base<Order_Details>{

  @Field()
  @OneToOne(()=>User)
  user_id!: string;
  @Field()
  @OneToOne(()=>Payment_Details)
  payment_id!: string;

  @Field({ nullable: true })
  @Property()
  total?: number;

  constructor(body:Order_Details_Input){
    super(body)
  }
}