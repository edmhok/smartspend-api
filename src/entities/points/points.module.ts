/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PointsService } from "./points.service";
import { PointsController } from "./points.controller";
import { PointsSchema } from "./points.model";
import { merchantSchema } from "./../merchant/merchant.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Points", schema: PointsSchema },
      { name: "Merchant", schema: merchantSchema },
    ]),
  ],
  controllers: [PointsController],
  providers: [PointsService],
})
export class PointsModule {}
