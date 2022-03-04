import { Entity, ManyToOne,   Property } from "@mikro-orm/core";
import { Field, ObjectType} from "type-graphql";
import { Shopping_Session } from "../shopping_session/shopping_session.entity";
import { Product } from "../product/product.entity";
import { Cart_Item_Input } from "./cart_item.input";
import { Base } from "../../util/base.entity";


@ObjectType()
@Entity()
export class Cart_Item extends Base<Cart_Item>{
  

    @Field(()=>Shopping_Session)
    @ManyToOne(() => Shopping_Session)     
    session_id!: Shopping_Session;
  
    @Field(()=>Product)
    @ManyToOne(()=>Product)
    product_id!: Product;
  
    @Field({nullable:true})
    @Property()
    quantity!: number;
  

 constructor(body:Cart_Item_Input){
     super(body)
 }
}