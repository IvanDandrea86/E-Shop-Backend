import {Service} from "typedi"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { Shopping_Session } from "../../entities/shopping_session/shopping_session.entity"
import { ErrorField, MyContext } from "../../type/type";
import { Shopping_SessionResponse } from "../../entities/shopping_session/shopping_session.input";
import { User } from "../../entities/user/user.entity";

@Service() // Dependencies injection
@Resolver(() => Shopping_Session )
export default class Shopping_SessionResolver {
    
    @Query(() => [Shopping_Session], { name:"getAllShopping_Session" })
    async getAllShopping_Session(@Ctx() ctx:MyContext) {
    return await ctx.em.find(Shopping_Session,{});
  }
  @Mutation(()=>Shopping_SessionResponse,{name:"newShopping_Session"})
  public async newShopping_Session(
    @Ctx() ctx:MyContext,
    @Arg("userID") userID:string,
    ):Promise<Shopping_SessionResponse>{
    try{
    const shopping_session= new Shopping_Session({})
    shopping_session.total=0;
    shopping_session.user= await ctx.em.getRepository(User)
    .findOneOrFail({id:userID})
     await ctx.em.getRepository(Shopping_Session).persistAndFlush(shopping_session)
      return {session:shopping_session}
  }
  catch(err){
    return {errors:new ErrorField("address",err)}
  }

}
}