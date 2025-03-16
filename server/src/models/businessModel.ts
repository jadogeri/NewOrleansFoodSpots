import mongoose, { Schema, Model } from 'mongoose';
import { IBusiness } from '../interfaces/IBusiness';
import { detailSchema } from './detailModel';

const businessSchema : Schema = new Schema<IBusiness>({
  
  user_id: {
     type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: "User",
  },
  business_id: {
    type: String,
    required: [true, "Please add the business id"],
    unique: [true, "business id already taken"],
  },
  liked: {
    type : Boolean,
    required : false,
    default : false

  },
  visited: {
    type : Boolean,
    required : false,
    default : false

  },
  detail: { type: detailSchema, required: true },

},
  {
    timestamps: true,
  }
);
 const Business: Model<IBusiness>  = mongoose.model<IBusiness>("Business", businessSchema);

export default Business;