import {Service} from "typedi"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { User_Address } from "../../entities/user_address/user_address.entity"
import { ErrorField, MyContext } from "../../type/type";
import { AddressResponse } from "../../entities/user_address/user_address.input";
import { AddressInput } from "../../entities/user_address/user_address.input";
import { User } from "../../entities/user/user.entity";

@Service() // Dependencies injection
@Resolver(() => User_Address )
export default class User_AddressResolver {
    @Query(() => [User_Address], { name:"getAllUser_Address" })
    public async getAllUser_Address(@Ctx() ctx:MyContext) {
    return await ctx.entityManager.find(User_Address,{});
  }
  @Mutation(()=>AddressResponse,{name:"newAddress"})
  public async newAddress(
    @Ctx() ctx:MyContext,
    @Arg("userID") userID:string,
    @Arg("addressData",{nullable:true}) addressData:AddressInput,
    ):Promise<AddressResponse>{
    try{
     const address=new User_Address(addressData)
      address.user=await  ctx.entityManager.getRepository(User)
      .findOneOrFail({id:userID})
      await ctx.entityManager.persistAndFlush(address);
    
     return {address:address}
  }
  catch(err){
    return {errors:new ErrorField("address",err)}
  }

  }
}