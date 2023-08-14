import { IsInt, IsDate} from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto){
  @IsInt()
  id: number;
  
  @IsInt()
  products_id: number;

  @IsInt()
  merchant_id: number;

  @IsInt()
  patron_id: number;

  @IsDate()
  createdAt: Date;
}