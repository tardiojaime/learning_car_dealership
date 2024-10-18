import { Car } from 'src/cars/interfaces/car.interfaces';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corrolla',
  },
  {
    id: uuid(),
    brand: 'Nissa',
    model: 'Frontier',
  },
  {
    id: uuid(),
    brand: 'Yundai',
    model: 'Ranger',
  },
  {
    id: uuid(),
    brand: 'Suzuki',
    model: 'Speed',
  },
  {
    id: uuid(),
    brand: 'Jumbo',
    model: 'hueno',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fasts',
  },
];
