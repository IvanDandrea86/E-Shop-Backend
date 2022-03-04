import { Service } from "typedi";
import { Arg, Ctx, Info, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entities/user/user.entity";
import { ErrorField, MyContext } from "../../type/type";
import { UserData, UserInput, UserResponse } from "../../entities/user/user.input";
import bcrypt from "bcrypt";
import { isValidEmail, isValidPassword } from "../../util/validation";
import { GraphQLResolveInfo } from "graphql";
import fieldsToRelations from "graphql-fields-to-relations";

@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {

  @Query(() => [User],{ name: "getUsers" })
  public async getUsers
  (@Ctx() ctx: MyContext): Promise<User[]> {
  return ctx.entityManager.getRepository(User).findAll({} );
  }
  @Mutation(() => UserResponse, { name: "createUser" })
  public async createUser(
    @Arg("userInput") userInput: UserInput,
    @Arg("userData", { nullable: true }) userData: UserData,
    @Ctx() ctx: MyContext
  ): Promise<UserResponse> {
    const password = await bcrypt.hash(userInput.password, 8);

    //Validation
    if(!isValidEmail(userInput.email)){
      return{
        errors:new ErrorField("email","not valid email")
      } 
    }
    if(!isValidPassword(userInput.password)){
      return{
        errors:new ErrorField("password","not valid password")
      } 
    }
    userInput.password=password
    try {
      const user = new User(userInput);
      if (userData !== undefined) {
        user.last_name = userData.last_name;
        (user.first_name = userData.first_name),
          (user.telephone = userData.telephone);
      }
      await ctx.entityManager.persistAndFlush(user);
      return { user: user };
    } catch (e) {
      console.log(e.code);
      if (e.code == 23505) {
        return {
          errors:new ErrorField("userInput","one of the field is not unique") 
        };
      }
      return { errors: new ErrorField("creation",e) };
    }
  }
  @Mutation(() =>UserResponse || Boolean, { name: "deleteUser" })
  async deleteUser(
    @Arg("userID") userID:string,
    @Ctx() ctx: MyContext):Promise<UserResponse | Boolean> {
      try{
   const user= await ctx.entityManager.findOneOrFail(User, {id:userID});
   await ctx.entityManager.remove(user).flush()
        return true
  }
  catch(err){
    return {errors:new ErrorField("delete",err)}
  }
  }  
}
