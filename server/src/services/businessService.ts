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

async function update(id : mongoose.Types.ObjectId,business : IBusiness) {
    return Business.findOneAndUpdate({_id : id}, // Filter
                          {$set: {...business}}, // Update
                          {upsert: true});
}

//{_id: "12"}, {$set: {protocol: "http"}}, {upsert: true}
async function remove(id : mongoose.Types.ObjectId) {
  return Business.findOneAndDelete({ _id : id });
}

async function removeAll(req : IJwtPayload) {
  return Business.deleteMany({ user_id : req.user.id });
}

export { getById, getByToken, getByBusinessID, create, update, remove, removeAll, getAll };
