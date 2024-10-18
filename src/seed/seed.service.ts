import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  //inyectamos seedService a un servicio
  constructor(private readonly carsService: CarsService) {}
  populateDB() {
    return this.carsService.fillCarsWithSeedData(CARS_SEED);
  }
}
