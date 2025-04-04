import { IBusiness } from "./IBusiness";

export interface IUser  {
    username?: string;
    email?: string;
    password? : string,
    phone? : string
    isEnabled? : boolean,
    failedLogins? : number;
    businesses?: IBusiness[]

}
