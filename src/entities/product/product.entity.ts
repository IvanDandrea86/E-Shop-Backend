import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Discount } from "../discount/discount.entity";
import { Product_Category } from "../product_category/product_category.entity";
import { Product_Inventory } from "../product_inventory/product_inventory.entity";

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  name!: string;

  @Field({ nullable: true })
  @Property()
  desc!: string;

  @Field({ nullable: true })
  @Property()
  SKU!: string;

  @Field(() => Product_Category)
  @ManyToOne(() => Product_Category)
  category_id!: Product_Category;

  @Field(() => Product_Inventory)
  @OneToMany(() => Product_Inventory, invetory_id => invetory_id.product_id)
  inventory_id = new Collection<Product_Inventory>(this);

  @Field({ nullable: true })
  @Property()
  price!: number;

  @Field(()=>Discount)
  @ManyToOne(()=>Discount)
  discount_id!: Discount;

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
