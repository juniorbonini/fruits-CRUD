import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { FruitRepository } from '../fruit-repository/fruit.repository';

@Injectable()
export class FruitsService {
  constructor(private fruitRepository: FruitRepository) {}
  public create(createFruitDto: CreateFruitDto) {
    try {
      return this.fruitRepository.create(createFruitDto);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  public findAll() {
    return this.fruitRepository.findAll();
  }

  public findOne(id: string) {
    return this.fruitRepository.findOne(id);
  }

  public update(id: string, updateFruitDto: UpdateFruitDto) {
    return this.fruitRepository.update(id, updateFruitDto);
  }

  public async remove(id: string) {
    return this.fruitRepository.remove(id);
  }
}
