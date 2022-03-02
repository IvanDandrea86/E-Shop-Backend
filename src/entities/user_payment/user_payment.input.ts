import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType} from "type-graphql";
import { User_Payment } from "./user_payment.entity";


@InputType()

export class User_Payment_Input  {
    
    @Field({nullable:true})
    payment_type?: string;
  
    @Field({nullable:true})
    provider?: string;
  
    @Field({nullable:true})
    account_no?: number;
  
    @Field({nullable:true})
    expiry?: Date;
  
}

@ObjectType()
export class PayementResponse {
  @Field(() => ErrorField, { nullable: true })
  errors?: ErrorField;
  @Field(() => User_Payment, { nullable: true })
  payment?: User_Payment;
}