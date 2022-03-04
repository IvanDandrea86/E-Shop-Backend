import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Cart_Item } from "./cart_item.entity";

@InputType()
export class Cart_Item_Input{
    @Field({nullable:true})
    quantity!: number; 
}
@ObjectType()
export class Cart_Item_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Cart_Item, { nullable: true })
    cart_item?: Cart_Item;
}