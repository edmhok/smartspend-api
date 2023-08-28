import { Document, Schema, model, Types } from 'mongoose';

export interface IMerchant extends Document {
  username: string;
  password: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: Date;
  phone: string;
  address: string;
  country: string;
  city: string;
  state: string;
  zipcode: string;
  points: number;
  createdAt: Date;
  order: Types.ObjectId[];
  products: Types.ObjectId[];
}
export const merchantSchema = new Schema<IMerchant>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    middle_name: { type: String, required: true },
    last_name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    points: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    order: [{ type: Schema.ObjectId, ref: 'Order', required: true }],
    products: [{ type: Schema.ObjectId, ref: 'Products', required: true }],
  });
  
  export const MerchantModel = model('Merchant', merchantSchema);