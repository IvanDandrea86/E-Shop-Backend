import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Discount } from "./discount.entity";



@InputType()
export class Discount_Input{
    @Field()
    name!: string;
  
    @Field()
    desc!: string;
    @Field()
    discount_percet!: number;
  
    @Field()
    active!: boolean;
  
}

@ObjectType()
export class Discount_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Discount, { nullable: true })
    discount?: Discount;
}