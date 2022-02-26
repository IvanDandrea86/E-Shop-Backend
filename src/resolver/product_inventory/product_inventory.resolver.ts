import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Product_Inventory } from "../../entities/product_inventory/product_inventory.entity"
import { MyContext } from "src/type/type";

@Service() // Dependencies injection
@Resolver(() => Product_Inventory )
export default class Product_InvetoryResolver {
    
    @Query(() => [Product_Inventory], { name:"getAllProduct_Inventory" })
    getAllProduct_Inventory(@Ctx() ctx:MyContext) {
    return ctx.em.find(Product_Inventory,{});
  }
}