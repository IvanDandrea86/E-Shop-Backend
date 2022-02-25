import { Entity, ManyToOne,  OneToMany,  PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType} from "type-graphql";
import { Shopping_Session } from "../shopping_session/shopping_session.entity";
import { Product } from "../product/product.entity";


@ObjectType()
@Entity()
export class Cart_Item {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(()=>Shopping_Session)
    @ManyToOne(() => Shopping_Session)     
    session_id!: Shopping_Session;
  
    @Field(()=>Product)
    @ManyToOne(()=>Product)
    product_id!: Product;
  
    @Field({nullable:true})
    @Property()
    quantity!: number;
  

    @Field()
    @Property()
    createdAt: Date = new Date();
    @Field()
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

}