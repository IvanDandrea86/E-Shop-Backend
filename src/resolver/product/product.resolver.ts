import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Product } from "../../entities/product/product.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Product )
export default class ProductResolver {
    
    @Query(() => [Product], { name:"getAllProduct" })
    getAllProduct(@Ctx() ctx:MyContext) {
    return ctx.em.find(Product,{});
  }
}