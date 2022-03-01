import {Service} from "typedi"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { User_Address } from "../../entities/user_address/user_address.entity"
import { ErrorField, MyContext } from "../../type/type";
import { AddressResponse } from "../user_address/user_address.input";
import { User } from "../../entities/user/user.entities";
import { AddressInput } from "./user_address.input";

@Service() // Dependencies injection
@Resolver(() => User_Address )
export default class User_AddressResolver {
    @Query(() => [User_Address], { name:"getAllUser_Address" })
    public async getAllUser_Address(@Ctx() ctx:MyContext) {
    return await ctx.em.find(User_Address,{});
  }
  @Mutation(()=>AddressResponse,{name:"newAddress"})
  public async newAddress(
    @Ctx() ctx:MyContext,
    @Arg("userID") userID:string,
    @Arg("addressData",{nullable:true}) addressData:AddressInput,
    ):Promise<AddressResponse>{
    try{
    const address= new User_Address(addressData)
    address.user= await ctx.em.getRepository(User)
    .findOneOrFail({id:userID})
     await ctx.em.getRepository(User_Address).persistAndFlush(address)
      return {address:address}
  }
  catch(err){
    return {errors:new ErrorField("address",err)}
  }

  }
}