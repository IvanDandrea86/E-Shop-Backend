import { Collection, Entity, ManyToOne, OneToMany, Property } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType } from "type-graphql";
import { Discount } from "../discount/discount.entity";
import { Product_Category } from "../product_category/product_category.entity";
import { Product_Inventory } from "../product_inventory/product_inventory.entity";
import { Product_Input } from "./product.input";

@ObjectType()
@Entity()
export class Product extends Base<Product>{
  
    @Field(() => [Product_Category])
    @ManyToOne(() => Product_Category)
    category_id!: [Product_Category];
  
    @Field(() => Product_Inventory)
    @OneToMany(() => Product_Inventory, invetory_id => invetory_id.product_id)
    inventory_id = new Collection<Product_Inventory>(this);

    @Field(()=>[Discount])
    @ManyToOne(()=>Discount)
    discount_id!: Discount[];
    
  @Field()
  @Property()
  name?: string;

  @Field({ nullable: true })
  @Property()
  desc?: string;

  @Field({ nullable: true })
  @Property()
  SKU?: string;

  @Field({ nullable: true })
  @Property()
  price?: number;


  constructor(body:Product_Input){
    super(body)
  }

}
