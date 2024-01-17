import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interfaces';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Ranger',
    },
    {
      id: uuid(),
      brand: 'Toyoda',
      model: 'Hilux',
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: string) {
    //return this.cars[id];
    const dat = this.cars.find((car) => car.id == id);
    console.log(dat);
    if (!dat) throw new NotFoundException(`El ${id} no existe`);
    return dat;
  }
  createCar(crearcar: CreateCarDto) {
    const dto: Car = {
      id: uuid(),
      ...crearcar,
    };
    this.cars.push(dto);
    return dto;
  }
  update(id: string, update: UpdateCarDto) {
    let carDB = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...update,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
  delete(id: string) {
    const car = this.findOneById(id);
    /*     if (!car)
      throw new NotFoundException(`El auto con el id: ${id}, ya no existe `); */
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
