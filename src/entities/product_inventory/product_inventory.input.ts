import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Product_Inventory } from "./product_inventory.entity";



@InputType()
export class Product_Inventory_Input{
@Field()
quantity: string;
}

@ObjectType()
export class Product_Inventory_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Product_Inventory, { nullable: true })
    inventory?: Product_Inventory;
}
