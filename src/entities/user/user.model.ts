import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
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
  createdAt: Date;
}

export const userSchema = new Schema<IUser>({
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
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = model<IUser>('User', userSchema);
