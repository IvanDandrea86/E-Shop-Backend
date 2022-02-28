import { VALID_PASSWORD_8_A_1, VAILDEMAIL} from "../const";

export const isEmptyString=(input:string)=>{
     return (input === "") 
}
export const isValidEmail=(input:string)=>{
    if( input.match(VAILDEMAIL)){
        return true
    }
    else  return false
}
export const isValidPassword=(input:string)=>{
     if( input.match(VALID_PASSWORD_8_A_1)){
        return true
    }
    else  return false
}