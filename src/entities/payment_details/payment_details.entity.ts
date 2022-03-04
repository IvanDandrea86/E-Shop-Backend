import { Entity, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Payment_Details_Input } from "./payment_details.input";

@ObjectType()
@Entity()
export class Payment_Details extends Base<Payment_Details>{
  
  @Field()
  @Property()
  order_id!: string;
  @Field()
  @Property()
  amount!: number;

  @Field()
  @Property()
  provider!: string;
  
  @Field()
  @Property()
  status!: string;
  
  constructor(body:Payment_Details_Input){
    super(body)
  }
}