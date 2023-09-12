import { Schema, model, Document, Types } from 'mongoose';
import { IMerchant } from '../merchant/merchant.model';

export interface IOrder extends Document {
  products: any;
  patron: Types.ObjectId;
  merchant: IMerchant;
  isPaid: boolean;
  status: string;


  createdAt: Date;
}

export const orderSchema = new Schema<IOrder>({
  products: [
    { 
      product: {
        type: Schema.Types.ObjectId, ref: 'Products', required: true 
      },
      qty: { type: Number, required: true }
    }
  ],
  patron: { type: Schema.Types.ObjectId, ref: 'Patron', required: true },
  merchant: { type: Schema.Types.ObjectId, ref: 'Merchant', required: true },
  isPaid: { type: Boolean},
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const OrderModel = model<IOrder>('Order', orderSchema);