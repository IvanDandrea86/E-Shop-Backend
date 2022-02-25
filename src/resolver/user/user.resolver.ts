import {Service} from "typedi"
import { Ctx, Query, Resolver } from "type-graphql"
import { User } from "../../entities/user/user.entities"
import { MyContext } from "src/type/type";

@Service() // Dependencies injection
@Resolver(() => User )
export default class UserResolver {
    
    @Query(() => [User], { nullable: true })
  me(@Ctx() ctx:MyContext) {
   

    return ctx.em.find(User,{});
  }
}