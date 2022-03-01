import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Discount } from "../../entities/discount/discount.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Discount )
export default class DiscountResolver {
    
    @Query(() => [Discount], { name:"getAllDiscount" })
    getAllDiscount(@Ctx() ctx:MyContext) {
    return ctx.em.find(Discount,{});
  }
}
