import mongoose from "mongoose"
import { IDetail } from "./IDetail";

export interface IBusiness  {
    user_id?: mongoose.Types.ObjectId;
    business_id?: string;
    detail?: IDetail;
    liked?: boolean;
    visited? :boolean;

}
