import { ErrorField } from "../../type/type";
import { Field, InputType, ObjectType} from "type-graphql";
import { Shopping_Session } from "./shopping_session.entity";

@InputType()
export class Shopping_Session_Input  {  
    @Field({nullable:true})
    total?: number;
  }

@ObjectType()
export class Shopping_SessionResponse {
  @Field(() => ErrorField, { nullable: true })
  errors?: ErrorField;
  @Field(() => Shopping_Session, { nullable: true })
  session?: Shopping_Session;
}