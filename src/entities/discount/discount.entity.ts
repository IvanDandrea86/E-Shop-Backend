import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Discount {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property()
  desc!: string;
  @Field()
  @Property()
  discount_percet!: number;

  @Field()
  @Property()
  active!: boolean;


  @Field()
  @Property()
  createdAt: Date = new Date();
  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
  @Field()
  @Property()
  deletedAt: Date = new Date();
}