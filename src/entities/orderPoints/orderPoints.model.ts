import { Schema, model, Document } from "mongoose";
import { IMerchant } from "../merchant/merchant.model";

export interface IOrderPoints extends Document {
  points: number;
  status: string;
  merchant: IMerchant;
  createdAt: Date;
}

export const orderPointsSchema = new Schema<IOrderPoints>({
  points: { type: Number, required: true },
  status: { type: String, required: true },
  merchant: { type: Schema.Types.ObjectId, ref: "Merchant" },
  createdAt: { type: Date, default: Date.now },
});

export const OrderPointsModel = model<IOrderPoints>(
  "OrderPoints",
  orderPointsSchema
);
