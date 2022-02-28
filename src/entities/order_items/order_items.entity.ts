import { Entity, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Order_Details } from "../order_details/order_details.entity";
import { Product } from "../product/product.entity";

@ObjectType()
@Entity()
export class Order_Items {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @ManyToOne(()=>Order_Details)
  order_id!: number;

  @Field(()=>Number)
  @OneToOne(()=>Product)
  product_id!: number;

  @Field({ nullable: true })
  @Property()
  quantity!: number;
  @Field()
  @Property()
  createdAt: Date = new Date();
  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}