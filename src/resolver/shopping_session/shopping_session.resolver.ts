import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { Shopping_Session } from "../../entities/shopping_session/shopping_session.entity"
import { MyContext } from "../../type/type";

@Service() // Dependencies injection
@Resolver(() => Shopping_Session )
export default class Shopping_SessionResolver {
    
    @Query(() => [Shopping_Session], { name:"getAllShopping_Session" })
    getAllShopping_Session(@Ctx() ctx:MyContext) {
    return ctx.em.find(Shopping_Session,{});
  }
}