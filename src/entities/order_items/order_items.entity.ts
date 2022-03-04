import { Entity, ManyToOne, OneToOne, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Order_Details } from "../order_details/order_details.entity";
import { Product } from "../product/product.entity";
import { Order_Items_Input } from "./order_items.input";

@ObjectType()
@Entity()
export class Order_Items extends Base<Order_Items>{
  
  @Field()
  @ManyToOne(()=>Order_Details)
  order_id!: string;

  @Field(()=>Number)
  @OneToOne(()=>Product)
  product_id!: string;

  @Field({ nullable: true })
  @Property()
  quantity!: number;

  constructor(body:Order_Items_Input){
    super(body)
  }

  
}