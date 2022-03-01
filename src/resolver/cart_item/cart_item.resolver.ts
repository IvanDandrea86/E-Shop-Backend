import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Cart_Item } from "../../entities/cart_item/cart_item.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Cart_Item )
export default class Cart_ItemResolver {
    
    @Query(() => [Cart_Item], { name:"getAllCart_Item" })
    getAllCart_Item(@Ctx() ctx:MyContext) {
    return ctx.em.find(Cart_Item,{});
  }
}
