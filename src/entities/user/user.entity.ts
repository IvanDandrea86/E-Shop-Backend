import { Cascade, Collection, Entity,   OneToMany, Property, Unique } from "@mikro-orm/core";
import { Base } from "../../util/base.entity";
import { Field, ObjectType} from "type-graphql";
import { User_Address } from "../user_address/user_address.entity";
import { UserInput } from "./user.input";
import { User_Payment } from "../user_payment/user_payment.entity";

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

   
    @OneToMany(() => User_Address, (b: User_Address) => b.user, { cascade: [Cascade.ALL] })
    public address = new Collection<User_Address>(this,);


  
    @OneToMany(() => User_Payment, (b: User_Payment) => b.user, { cascade: [Cascade.ALL] })
    public payements = new Collection<User_Payment>(this);

    constructor(body: UserInput) {
      super(body);
    }
  
}