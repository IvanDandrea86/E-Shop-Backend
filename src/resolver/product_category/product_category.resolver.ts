import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Product_Category } from "../../entities/product_category/product_category.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Product_Category )
export default class Product_CategoryResolver {
    
    @Query(() => [Product_Category], { name:"getAllProduct_Category" })
    getAllProduct_Category(@Ctx() ctx:MyContext) {
    return ctx.entityManager.find(Product_Category,{});
  }
}
