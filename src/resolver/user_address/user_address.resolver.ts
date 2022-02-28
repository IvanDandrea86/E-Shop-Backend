import {Service} from "typedi"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { User_Address } from "../../entities/user_address/user_address.entity"
import { ErrorField, MyContext } from "../../type/type";
import { UserResponse } from "../user/user.input";
import { User } from "../../entities/user/user.entities";

@Service() // Dependencies injection
@Resolver(() => User_Address )
export default class User_AddressResolver {
    
    @Query(() => [User_Address], { name:"getAllUser_Address" })
    getAllUser_Address(@Ctx() ctx:MyContext) {
    return ctx.em.find(User_Address,{});
  }
  @Mutation(()=>UserResponse,{name:"newAddress"})
  async newAddress(
    @Ctx() ctx:MyContext,
    @Arg("userID") userID:number
  ):Promise<UserResponse>{
    try{
    const user= await ctx.em.findOneOrFail(User,{id:userID})
    const address= new User_Address(user)
    await ctx.em.persistAndFlush(address)
    return{user:user}
  }
  catch(err){
    return {errors:new ErrorField("address",err)}
  }

  }
}