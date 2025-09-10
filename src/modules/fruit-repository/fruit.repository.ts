import { Injectable, NotFoundException } from '@nestjs/common';
import { Fruit } from '../fruits/entities/fruit.entity';
import { CreateFruitDto } from '../fruits/dto/create-fruit.dto';
import { randomUUID } from 'crypto';
import { UpdateFruitDto } from '../fruits/dto/update-fruit.dto';

@Injectable()
export class FruitRepository {
  public fruits: Fruit[];
  constructor() {
    this.fruits = [];
  }

  private convertToFruit(createFruit: CreateFruitDto): Fruit {
    const fruit = new Fruit();

    fruit.name = createFruit.name;
    fruit.price = createFruit.price;
    fruit.quantity = createFruit.quantity;

    return fruit;
  }

  public create(createFruit: CreateFruitDto): Fruit {
    const fruit = this.convertToFruit(createFruit);
    fruit.id = randomUUID();
    this.fruits.push(fruit);
    return fruit;
  }

  findAll() {
    return this.fruits;
  }

  public findOne(id: string): Fruit {
    const fruit = this.fruits.find((fruit) => fruit.id === id);
    if (!fruit) throw new NotFoundException();
    return fruit;
  }

  public update(id: string, updateFruitDto): UpdateFruitDto {
    const fruit = this.findOne(id);
    if (updateFruitDto.name) fruit.name = updateFruitDto.name;
    if (updateFruitDto.price) fruit.price = updateFruitDto.price;
    if (updateFruitDto.quantity) fruit.quantity = updateFruitDto.quantity;

    return fruit;
  }

  public remove(id: string) {
    const index = this.fruits.findIndex((prop) => prop.id === id);
    if (index < 0) throw new NotFoundException();

    this.fruits.splice(index, 1);
  }
}
