import { User_Address } from "./user_address.entity";
import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType } from "type-graphql";
@InputType()
export class AddressInput
{
    @Field({nullable:true})
    addresse_line1?: string;
  
    @Field({nullable:true})
    addresse_line2?: string;
  
    @Field({nullable:true})
    city?: string;
  
    @Field({nullable:true})
    postal_code?: number;

    @Field({nullable:true})
    country?: string;
}
@ObjectType()
export class AddressResponse {
  @Field(() => ErrorField, { nullable: true })
  errors?: ErrorField;
  @Field(() => User_Address, { nullable: true })
  address?: User_Address;
}