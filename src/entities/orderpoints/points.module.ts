import { Module } from "@nestjs/common";
import { OrderPointsService } from "./points.service";
import { OrderPointsController } from "./points.controller";
import { PointsSchema } from "./points.model";
import { merchantSchema } from "./../merchant/merchant.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Orderpoints", schema: PointsSchema },
      { name: "Merchant", schema: merchantSchema },
    ]),
  ],
  controllers: [OrderPointsController],
  providers: [OrderPointsService],
})
export class OrderPointsModule {}
