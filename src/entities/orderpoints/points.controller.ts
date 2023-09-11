import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  Patch,
  Request,
  UseGuards,
} from "@nestjs/common";
import { OrderPointsService } from "./points.service";
import { CreateOrderPointsDto } from "./dto/create-points.dto";
import { UpdateOrderPointsDto } from "./dto/update-points.dto";
import { JwtAuthGuard } from "src/authentication/guard/jwt-auth.guard";
import { ObjectId } from "mongoose";

@Controller("orderpoints")
export class OrderPointsController {
  constructor(private pointsService: OrderPointsService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async fillAll() {
    return this.pointsService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: ObjectId) {
    return this.pointsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPointsDto: CreateOrderPointsDto) {
    return this.pointsService.create(createPointsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: ObjectId,
    @Body() updatePointsDto: UpdateOrderPointsDto
  ) {
    return this.pointsService.update(id, updatePointsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: ObjectId) {
    this.pointsService.remove(id);
    return "Deleted!";
  }
}
