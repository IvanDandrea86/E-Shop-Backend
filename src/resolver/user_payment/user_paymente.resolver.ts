import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { User_Payment } from "../../entities/user_payment/user_payment.entity"
import { MyContext } from "src/type/type";

@Service() // Dependencies injection
@Resolver(() => User_Payment )
export default class User_PaymentResolver {
    
    @Query(() => [User_Payment], { name:"getAllUser_Payment" })
    getAllUser_Payment(@Ctx() ctx:MyContext) {
    return ctx.em.find(User_Payment,{});
  }
}