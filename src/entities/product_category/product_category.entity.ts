import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Product_Category {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  name!: string;

  @Field({ nullable: true })
  @Property()
  desc!: string;

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
