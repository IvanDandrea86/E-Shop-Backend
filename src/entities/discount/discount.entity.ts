import { Entity, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Discount_Input } from "./discount.input";

@ObjectType()
@Entity()
export class Discount extends Base<Discount> {
  
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

constructor(body:Discount_Input){
  super(body)
}
}
