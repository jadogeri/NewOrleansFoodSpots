import { IDetail } from "./IDetail";

export interface IBusiness  {
    business_id?: string;
    detail?: IDetail;
    liked?: boolean;
    visited? :boolean;

}
