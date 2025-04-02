
import { Schema } from 'mongoose';
import { IDetail } from '../interfaces/IDetail';

export const detailSchema : Schema = new Schema<IDetail>({

  name: {
    type: String,
    required: [true, "Please add the business name"],
    trim: true,
  },
  phone: {
    type: String,
    required: [false, "Please add the user email address"],
    //lowercase: true,
    trim: true,
  },
  rating :{
    type: Number,
    required : false,
    default : 0,
    min: [0,"Cannot have rating less than zero"],
    max: [5,"Cannot have rating greater than 5"]

  },
  price: {
    type: String,
    required: [false, "Please add the business name"],
    trim: true,
  },
  reviews: {
    type: Number,
    required: [false, "Please add the user email address"],
    //lowercase: true,
    trim: true,
  },
  location :{
    type: String,
    required : false,

  },
  transactions: [{
    type: Array,
    required: [false, "Please add the business name"],
    trim: true,
  }
  ]
},
);



