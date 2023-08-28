import { Schema, model, Document } from 'mongoose';

export interface ITransaction extends Document {
  role: string;
  transactionname: string;
  password: string;
  membership: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: Date;
  phone: number;
  address: string;
  country: string;
  city: string;
  state: string;
  zipcode: string;
  createdAt: Date;
}

export const transactionSchema = new Schema<ITransaction>({
  role: { type: String, required: true },
  transactionname: { type: String, required: true },
  password: { type: String, required: true },
  membership: { type: String, required: true },
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  last_name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const TransactionModel = model<ITransaction>('Transaction', transactionSchema);
