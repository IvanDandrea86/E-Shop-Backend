import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Product } from "./product.entity";



@InputType()
export class Product_Input{
@Field()
name!: string;
@Field({ nullable: true })
desc!: string;
@Field({ nullable: true })
SKU!: string;
@Field({ nullable: true })
price!: number;
}

@ObjectType()
export class Product_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Product, { nullable: true })
    product?: Product;
}
