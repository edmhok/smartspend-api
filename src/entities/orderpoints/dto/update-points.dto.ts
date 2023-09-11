import { PartialType } from "@nestjs/mapped-types";
import { CreateOrderPointsDto } from "./create-points.dto";
import { IsString, IsInt, IsDate } from "@nestjs/class-validator";
import { ObjectId } from "mongoose";

export class UpdateOrderPointsDto extends PartialType(CreateOrderPointsDto) {
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
