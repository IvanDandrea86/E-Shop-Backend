import { Service } from "typedi";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entities/user/user.entities";
import { MyContext } from "../../type/type";
import { UserData, UserInput, UserResponse } from "../../type/user.types";
import bcrypt from "bcrypt";
import { isValidEmail, isValidPassword } from "../../util/validation";
@Service() // Dependencies injection
@Resolver(() => User)
export default class UserResolver {
  @Query(() => [User], { name: "getAllUser" })
  async getAllUser(@Ctx() ctx: MyContext) {
    return await ctx.em.find(User, {});
  }
  @Mutation(() => UserResponse, { name: "createUser" })
  async createUser(
    @Arg("userInput") userInput: UserInput,
    @Arg("userData", { nullable: true }) userData: UserData,
    @Ctx() ctx: MyContext
  ): Promise<UserResponse> {
    const password = await bcrypt.hash(userInput.password, 8);

    //Validation
    if(!isValidEmail(userInput.email)){
      return{
        errors: {
          field: "email",
          message: "not valid email",
        }
      } 
    }
    if(!isValidPassword(userInput.password)){
      return{
        errors: {
          field: "password",
          message: "not valid password",
        }
      } 
    }
    try {
      const user = new User(userInput.username, userInput.email, password);
      if (userData !== undefined) {
        user.last_name = userData.last_name;
        (user.first_name = userData.first_name),
          (user.telephone = userData.telephone);
      }
      await ctx.em.persistAndFlush(user);
      return { user: user };
    } catch (e) {
      console.log(e.code);
      if (e.code == 23505) {
        return {
          errors: {
            field: "userInput",
            message: "one of the field is not unique",
          },
        };
      }
      return { errors: { field: "creation", message: "Something goes wrong" } };
    }
  }
}
