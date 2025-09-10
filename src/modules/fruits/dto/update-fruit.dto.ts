import { UpdateFruitInterface } from '../interfaces/fruit.update.interface';

export class UpdateFruitDto implements UpdateFruitInterface {
  name?: string;
  quantity?: number;
  price?: number;
  inStocck?: boolean;
  id?: string;
}
