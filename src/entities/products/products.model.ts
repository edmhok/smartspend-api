import { Schema, model, Document } from 'mongoose';

export interface IProducts extends Document {
  entryDate: Date;
  productName: string;
  brand: string;
  description: string;
  imageUrl: string;
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
}

export const productsSchema = new Schema<IProducts>({
  entryDate: { type: Date, required: true },
  productName: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
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
  originalPrice: { type: Number, required: true }
});

export const ProductsModel = model<IProducts>('Products', productsSchema);
