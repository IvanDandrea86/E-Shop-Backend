import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Order_Details } from "./order_details.entity";



@InputType()
export class Order_Details_Input{
    @Field({ nullable: true })
    total?: number;
  
}

@ObjectType()
export class Order_Details_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Order_Details, { nullable: true })
    order_details?: Order_Details;
}