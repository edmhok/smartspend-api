import { Schema, model, Document } from 'mongoose';
import { IMerchant } from '../merchant/merchant.model';

export interface IProducts extends Document {
  entryDate: Date;
  productName: string;
  brand: string;
  description: string;
  photo: string,
  sku: string;
  category: string;
  variant: string;
  size: string;
  color: string;
  tags: string;
  price: number;
  qty: number;
  points: number;
  discount: number;
  originalPrice: number;
  merchant: IMerchant
}

export const productsSchema = new Schema<IProducts>({
  entryDate: { type: Date, required: true },
  productName: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  photo: String,
  sku: { type: String, required: true },
  category: { type: String, required: true },
  variant: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  tags: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  points: { type: Number, required: true },
  discount: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  merchant: { type: Schema.ObjectId, ref: 'Merchant', required: true },
});

export const ProductsModel = model<IProducts>('Products', productsSchema);
