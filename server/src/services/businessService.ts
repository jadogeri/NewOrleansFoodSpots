import mongoose from "mongoose";
import Business from "../models/businessModel";
import { IBusiness } from "../interfaces/IBusiness";
import { IJwtPayload } from "../interfaces/IJWTPayload";

async function getById(id : mongoose.Types.ObjectId) {
    return Business.findOne({ _id : id });
  }
  async function getAll(req : IJwtPayload) {
    return Business.find({ user_id : req.user.id });
  }
async function getByToken(token : string) {
  return Business.findOne({ token : token });
}

async function getByBusinessID(id : string) {
  return Business.findOne({ business_id : id });
}

async function create(business : IBusiness) {
  return  Business.create(business);
}

async function update(business : IBusiness) {
    return Business.findOneAndUpdate({business_id : business.business_id,user_id : business.user_id}, // Filter
                          {$set: {...business}}, // Update
                          {upsert: true});
}

//{_id: "12"}, {$set: {protocol: "http"}}, {upsert: true}
async function remove(user_id : mongoose.Types.ObjectId, businees_id : string) {
  return Business.findOneAndDelete({ user_id : user_id, business_id : businees_id });
}

async function removeAll(req : IJwtPayload) {
  return Business.deleteMany({ user_id : req.user.id });
}

async function getByBusinessObject(business : IBusiness) {
  return Business.findOne({business_id : business.business_id,user_id : business.user_id});
}


export { getById, getByToken, getByBusinessID, create,
         update, remove, removeAll, getAll, getByBusinessObject };
