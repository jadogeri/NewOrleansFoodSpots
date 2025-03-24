import mongoose from "mongoose";
import { IJwtPayload } from "./IJWTPayload";
import { IDetail } from "./IDetail";
export interface IBusinessCreateRequest extends IJwtPayload{
    
    user_id?: mongoose.Types.ObjectId;
    business_id?: string;
    detail: IDetail;
    liked?: boolean;
    visited? :boolean;

}
