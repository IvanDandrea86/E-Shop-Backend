import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Order_Items } from "./order_items.entity";



@InputType()
export class Order_Items_Input{
    @Field({ nullable: true })
  quantity?: number;
}

@ObjectType()
export class Order_Items_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Order_Items, { nullable: true })
    order_items?: Order_Items;
}