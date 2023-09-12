import { Document, Schema, model, Types } from "mongoose";
import { IMerchantBanks } from "../merchantBanks/merchantBanks.model";
import { IOrderPoints } from "../orderPoints/orderPoints.model";

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
  photos: string;
  products: Types.ObjectId[];
  banks: IMerchantBanks[];
  orderPoints: IOrderPoints[];
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
  points: { type: Number },
  createdAt: { type: Date, default: Date.now },
  order: [{ type: Schema.ObjectId, ref: "Order" }],
  photos: String,
  products: [{ type: Schema.ObjectId, ref: "Products" }],
  banks: [{ type: Schema.ObjectId, ref: "MerchantBanks" }],
  orderPoints: [{ type: Schema.ObjectId, ref: "OrderPoints" }],
});

export const MerchantModel = model("Merchant", merchantSchema);
