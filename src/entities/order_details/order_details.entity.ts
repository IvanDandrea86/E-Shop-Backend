import { Entity, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Payment_Details } from "../payment_details/payment_details.entity";
import { User } from "../user/user.entity";

@ObjectType()
@Entity()
export class Order_Details {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @OneToOne(()=>User)
  user_id!: number;
  @Field()
  @OneToOne(()=>Payment_Details)
  payment_id!: number;

  @Field({ nullable: true })
  @Property()
  total!: number;
  @Field()
  @Property()
  createdAt: Date = new Date();
  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}