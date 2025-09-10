import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitsModule } from './modules/fruits/fruits.module';
import { FruitsService } from './modules/fruits/fruits.service';
import { FruitRepository } from './modules/fruit-repository/fruit.repository';

@Module({
  imports: [FruitsModule],
  controllers: [AppController],
  providers: [AppService, FruitsService, FruitRepository],
})
export class AppModule {}
