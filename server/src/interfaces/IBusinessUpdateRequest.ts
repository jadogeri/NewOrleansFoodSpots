import { IJwtPayload } from "./IJWTPayload";
import { IDetail } from "./IDetail";

export interface IBusinessUpdateRequest extends IJwtPayload{
    
  business_id?: string;
  detail?: IDetail;
  liked?: boolean;
  visited? :boolean;  

}
