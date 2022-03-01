import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Order_Details } from "../../entities/order_details/order_details.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Order_Details )
export default class Order_DetailsResolver {
    
    @Query(() => [Order_Details], { name:"getAllOrder_Details" })
    getAllOrder_Details(@Ctx() ctx:MyContext) {
    return ctx.em.find(Order_Details,{});
  }
}