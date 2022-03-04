import { Entity, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Product_Category_Input } from "./product_category.input";

@ObjectType()
@Entity()
export class Product_Category extends Base<Product_Category>{
  
  @Field()
  @Property()
  name!: string;

  @Field({ nullable: true })
  @Property()
  desc!: string;
constructor(body:Product_Category_Input){
  super(body)
}
  
}
