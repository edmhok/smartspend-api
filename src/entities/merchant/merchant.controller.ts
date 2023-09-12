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
  Inject,
  forwardRef,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { MerchantService } from "./merchant.service";
import { CreateMerchantDto } from "./dto/create-merchant.dto";
import { UpdateMerchantDto } from "./dto/update-merchant.dto";
import { JwtAuthGuard } from "src/authentication/guard/jwt-auth.guard";
import { OrderService } from "../order/order.service";
import { ObjectId } from "mongoose";
import { S3Service } from "src/utils/S3Service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("merchants")
export class MerchantController {
  constructor(
    private merchantService: MerchantService,
    // @Inject(forwardRef(() => OrderService))
    // private readonly orderService: OrderService,
    private readonly s3Service: S3Service
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async fillAll() {
    const response = await this.merchantService.findAll();
    return await Promise.all(
      response.map(async (item) => {
        return {
          ...item,
          photo: item.photos
            ? await this.s3Service.getFile(item.photos[0])
            : "",
        };
      })
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  async getProfile(@Request() req) {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString("utf-8")
    );
    const merchant_id = decodedToken.merchantPayload.id;

    const response = await this.merchantService.findOne(merchant_id);
    return {
      ...response,
      photo: response.photos
        ? await this.s3Service.getFile(response.photos[0])
        : "",
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param("id") id: ObjectId) {
    const response = await this.merchantService.findOne(id);
    console.log({ response });
    return {
      ...response,
      photo: response.photos
        ? await this.s3Service.getFile(response.photos[0])
        : "",
      banks:
        response.banks &&
        (await Promise.all(
          response.banks.map(async (bank) => {
            return {
              ...bank,
              photo: (await this.s3Service.getFile(bank.photo)) || "",
            };
          })
        )),
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor("photos"))
  async create(
    @Body() createMerchantDto: CreateMerchantDto,
    @UploadedFile() photo
  ) {
    if (photo) {
      const response = await this.s3Service.uploadFile(photo);
      if (response) {
        createMerchantDto.photos = response.Key;
      }
    }
    return this.merchantService.create(createMerchantDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: ObjectId,
    @Body() updateMerchantDto: UpdateMerchantDto
  ) {
    return this.merchantService.update(id, updateMerchantDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(@Param("id") id: ObjectId) {
    return this.merchantService.remove(id);
  }
}
