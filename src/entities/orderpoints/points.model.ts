import { Schema, model, Document } from "mongoose";
import { IMerchant } from "../merchant/merchant.model";

export interface IPoints extends Document {
  points: number;
  status: string;
  merchant: IMerchant;
  createdAt: Date;
}

export const PointsSchema = new Schema<IPoints>({
  points: { type: Number, required: true },
  status: { type: String, required: true },
  merchant: { type: Schema.Types.ObjectId, ref: "Merchant" },
  createdAt: { type: Date, default: Date.now },
});

export const PointsModel = model<IPoints>("orderpoints", PointsSchema);
