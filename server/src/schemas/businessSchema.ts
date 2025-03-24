import { Schema } from 'mongoose';
import { IBusiness } from '../interfaces/IBusiness';
import { detailSchema } from './detailSchema';

export const businessSchema : Schema = new Schema<IBusiness>({
  
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
