import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Product } from "../product/product.entity";

@ObjectType()
@Entity()
export class Product_Inventory {

    @Field()
  @PrimaryKey()
  id!: number;

  @Field(()=>Product)
  @ManyToOne(()=>Product)
  product_id!: Product;

  @Field()
  @Property()
  quantity!: string;


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
