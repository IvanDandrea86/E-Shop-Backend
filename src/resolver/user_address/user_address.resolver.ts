import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { User_Address } from "../../entities/user_address/user_address.entity"
import { MyContext } from "src/type/type";

@Service() // Dependencies injection
@Resolver(() => User_Address )
export default class User_AddressResolver {
    
    @Query(() => [User_Address], { name:"getAllUser_Address" })
    getAllUser_Address(@Ctx() ctx:MyContext) {
    return ctx.em.find(User_Address,{});
  }
}