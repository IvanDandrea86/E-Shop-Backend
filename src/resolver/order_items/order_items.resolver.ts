import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Order_Items } from "../../entities/order_items/order_items.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Order_Items )
export default class Order_ItemsResolver {
    
    @Query(() => [Order_Items], { name:"getAllOrder_Items" })
    getAllOrder_Items(@Ctx() ctx:MyContext) {
    return ctx.em.find(Order_Items,{});
  }
}