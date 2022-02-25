import UserResolver from "./user/user.resolver";
// Important: Add all your module's resolver in this
export const resolvers: [Function, ...Function[]] = [
  UserResolver,
  
];