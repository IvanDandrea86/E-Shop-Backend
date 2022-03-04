import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { AddressInput } from "./user_address.input";
import { Base } from "../../util/base.entity";
import { Field, ObjectType} from "type-graphql";
import { User } from "../user/user.entity";


@ObjectType()
@Entity()
export class User_Address extends Base<User_Address> {
    
    @Field(()=>User)
    @ManyToOne( () => User, {onDelete:'cascade'})     
    public user: User;
  
    @Field({nullable:true})
    @Property({nullable:true})
    public addresse_line1?: string;
  
    @Field({nullable:true})
    @Property({nullable:true})
    public addresse_line2?: string;
  
    @Field({nullable:true})
    @Property({nullable:true})
    public city?: string;
  
    @Field({nullable:true})
    @Property({nullable:true})
    public postal_code?: number;
    @Field({nullable:true})
    @Property({nullable:true})
    public country?: string;
  
    
    constructor(body: AddressInput) {
        super(body);
      }

}