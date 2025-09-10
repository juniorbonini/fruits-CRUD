import { IsInt, IsNumber, IsString } from 'class-validator';
import { FruitCreatableInterface } from '../interfaces/fruit.create.interface';

export class CreateFruitDto implements FruitCreatableInterface {
  @IsString()
  name!: string;
  @IsInt()
  quantity!: number;
  @IsNumber()
  price!: number;
}
