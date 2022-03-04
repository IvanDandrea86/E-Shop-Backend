import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Product } from "../product/product.entity";
import { Product_Inventory_Input } from "./product_inventory.input";

@ObjectType()
@Entity()
export class Product_Inventory extends Base<Product_Inventory>{

  
  @Field(()=>Product)
  @ManyToOne(()=>Product)
  product_id!: Product;

  @Field()
  @Property()
  quantity!: string;

  constructor (body:Product_Inventory_Input){
    super(body)
  }
}
