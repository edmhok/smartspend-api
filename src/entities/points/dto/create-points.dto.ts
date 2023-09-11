import { IsString, IsInt, IsDate } from "@nestjs/class-validator";
import { ObjectId } from "mongoose";

export class CreatePointsDto {
  @IsInt()
  id: ObjectId;

  @IsString()
  merchant_Id: string;

  @IsInt()
  points: number;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;
}
