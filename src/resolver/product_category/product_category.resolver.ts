import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Product_Category } from "../../entities/product_category/product_category.entity"
import { MyContext } from "src/type/type";

@Service() // Dependencies injection
@Resolver(() => Product_Category )
export default class Product_CategoryResolver {
    
    @Query(() => [Product_Category], { name:"getAllProduct_Category" })
    getAllProduct_Category(@Ctx() ctx:MyContext) {
    return ctx.em.find(Product_Category,{});
  }
}