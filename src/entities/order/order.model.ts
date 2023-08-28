import { Schema, model, Document, Types } from 'mongoose';

export interface IOrder extends Document {
  products: Types.ObjectId[];
  patron: Types.ObjectId;
  merchant: Types.ObjectId;
  createdAt: Date;
}

export const orderSchema = new Schema<IOrder>({
  products: [{ type: Schema.Types.ObjectId, ref: 'Products', required: true }],
  patron: { type: Schema.Types.ObjectId, ref: 'Patron', required: true },
  merchant: { type: Schema.Types.ObjectId, ref: 'Merchant', required: true },
  createdAt: { type: Date, default: Date.now },
});

export const OrderModel = model<IOrder>('Order', orderSchema);