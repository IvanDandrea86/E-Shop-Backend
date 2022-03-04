import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
import { Product_Category } from "./product_category.entity";



@InputType()
export class Product_Category_Input{
    @Field()
    name!: string;
  
    @Field({ nullable: true })
    desc!: string;
}

@ObjectType()
export class Product_Category_Response{
    @Field(() => ErrorField, { nullable: true })
    errors?: ErrorField;
    @Field(() => Product_Category, { nullable: true })
    Category?: Product_Category;
}