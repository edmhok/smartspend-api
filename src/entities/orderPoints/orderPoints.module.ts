import { Module } from "@nestjs/common";
import { OrderPointsService } from "./orderPoints.service";
import { OrderPointsController } from "./orderPoints.controller";
import { orderPointsSchema } from "./orderPoints.model";
import { merchantSchema } from "./../merchant/merchant.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "OrderPoints", schema: orderPointsSchema },
      { name: "Merchant", schema: merchantSchema },
    ]),
  ],
  controllers: [OrderPointsController],
  providers: [OrderPointsService],
})
export class OrderPointsModule {}
