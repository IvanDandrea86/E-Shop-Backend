import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Payment_Details } from "../../entities/payment_details/payment_details.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Payment_Details )
export default class Payment_DetailsResolver {
    
    @Query(() => [Payment_Details], { name:"getAllPayment_Details" })
    getAllPayment_Details(@Ctx() ctx:MyContext) {
    return ctx.entityManager.find(Payment_Details,{});
  }
}