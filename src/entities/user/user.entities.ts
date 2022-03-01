import { Cascade, Collection, Entity,   OneToMany,   PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType} from "type-graphql";
import { User_Address } from "../user_address/user_address.entity";
import { UserInput } from "../../resolver/user/user.input";

@ObjectType()
@Entity()
export class User extends Base<User> {
   
  
    @Field()
    @Property()
    @Unique()
    public username: string;
  
    @Field()
    @Property()
    @Unique()
    public email: string;
  
    @Field({nullable:true})
    @Property({nullable:true})
    public first_name?: string;
  
    @Field({nullable:true})
    @Property({nullable:true})
    public last_name?: string;
  

    @Field({nullable:true})
    @Property({nullable:true})
    public telephone?: number;

    @Property()
    password!: string;

    @Field(() => [User_Address])
    @OneToMany(() => User_Address, (b: User_Address) => b.user, { cascade: [Cascade.ALL] })
    public address = new Collection<User_Address>(this);

    constructor(body: UserInput) {
      super(body);
    }
  
}