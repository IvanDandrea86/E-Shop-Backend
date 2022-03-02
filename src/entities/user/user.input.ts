import { User } from "../../entities/user/user.entity";
import { Field, InputType, ObjectType } from "type-graphql";
import { ErrorField } from "../../type/type";
@InputType()
export class UserInput
{
    @Field({nullable:true})
    username:string;
    @Field({nullable:true})
    email:string;
    @Field()
    password:string;
}
@InputType()
export class UserData
{
    @Field({nullable:true})
    first_name:string;
    @Field({nullable:true})
    last_name:string;
    @Field({nullable:true})
    telephone:number;
}

@ObjectType()
export class UserResponse {
  @Field(() => ErrorField, { nullable: true })
  errors?: ErrorField;
  @Field(() => User, { nullable: true })
  user?: User;
}