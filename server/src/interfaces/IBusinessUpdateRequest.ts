import { IJwtPayload } from "./IJWTPayload";
export interface IBusinessUpdateRequest extends IJwtPayload{
    
  email?: string
  name? : string
  phone? : string
  fax?:string
  

}
