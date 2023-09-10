import { Document, Schema, model, Types } from 'mongoose';

export interface IMerchantBanks extends Document {
  type: string,
  name: string,
  number: string,
  photo: string,
  merchantId: string
}
export const merchantBanksSchema = new Schema<IMerchantBanks>({
  type: String,
  name: String,
  number: String,
  photo: String,
  merchantId: String
});
  
  export const MerchantBanksModel = model('MerchantBanks', merchantBanksSchema);