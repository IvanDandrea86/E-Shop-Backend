import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Payment_Details } from "./payment_details.entity";



@InputType()
export class Payment_Details_Input{
    @Field()
    order_id!: string;
    @Field()
    amount!: number;

    @Field()
    provider!: string;
    
    @Field()
    status!: string;
}

@ObjectType()
export class Payment_Details_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Payment_Details, { nullable: true })
    payment_details?: Payment_Details;
}