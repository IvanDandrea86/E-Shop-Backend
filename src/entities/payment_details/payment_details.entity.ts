import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Payment_Details {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  order_id!: number;
  @Field()
  @Property()
  amount!: number;

  @Field()
  @Property()
  provider!: string;
  
  @Field()
  @Property()
  status!: string;
  
  @Field()
  @Property()
  createdAt: Date = new Date();
  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}