import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Ranger',
    },
    {
      id: 3,
      brand: 'Toyoda',
      model: 'Hilux',
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: number) {
    //return this.cars[id];
    const dat = this.cars.find((car) => car.id == id);
    console.log(dat);
    if (!dat) throw new NotFoundException(`El ${id} no existe`);
    return dat;
  }
}
