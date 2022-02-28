import {Service} from "typedi"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import { User } from "../../entities/user/user.entities"
import { MyContext } from "../../type/type";
import { UserData, UserInput, UserResponse } from "../../type/user.types";
import bcrypt from "bcrypt"
@Service() // Dependencies injection
@Resolver(() => User )
export default class UserResolver {
    
    @Query(() => [User], { name:"getAllUser" })
    async getAllUser(@Ctx() ctx:MyContext) {
    return await ctx.em.find(User,{});
  }
  @Mutation(() => UserResponse, { name:"createUser" })
  async createUser(
    @Arg("userInput") userInput:UserInput,
    @Arg("userData",{nullable:true}) userData:UserData,
    @Ctx() ctx:MyContext):Promise<UserResponse> {

  const password=await bcrypt.hash(userInput.password, 8);
    

     try {
    const user = new User(userInput.username,userInput.email,password);
    // if (userData !==null){
    //   user.last_name=userData.last_name
    //   user.first_name=userData.first_name,
    //   user.telephone=userData.telephone
    // }
    await ctx.em.persistAndFlush(user)
    return {user:user}
  } catch (e) {
    console.error(e)
    return {errors:{field:"creation",message:"Something goes wrong"}}
  }

}  

}