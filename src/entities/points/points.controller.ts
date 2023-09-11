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
import { PointsService } from "./points.service";
import { CreatePointsDto } from "./dto/create-points.dto";
import { UpdatePointsDto } from "./dto/update-points.dto";
import { JwtAuthGuard } from "src/authentication/guard/jwt-auth.guard";
import { ObjectId } from "mongoose";

@Controller("points")
export class PointsController {
  constructor(private pointsService: PointsService) {}

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
  create(@Body() createPointsDto: CreatePointsDto) {
    return this.pointsService.create(createPointsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: ObjectId, @Body() updatePointsDto: UpdatePointsDto) {
    return this.pointsService.update(id, updatePointsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: ObjectId) {
    this.pointsService.remove(id);
    return "Deleted!";
  }
}
