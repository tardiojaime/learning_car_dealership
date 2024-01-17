import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carservice: CarsService) {}

  @Get()
  getAllCars() {
    return this.carservice.findAll();
  }
  //Verificar que el id cumpla con la estructura de uuid
  // con le pipes ParseUUIDPipe
  @Get(':id')
  getByIdCars(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    console.log(id);
    return this.carservice.findOneById(id);
  }

  @Post()
  //@UsePipes(ValidationPipe) validaciones locales - convertimos a uno en pipes globales
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carservice.createCar(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatecar: UpdateCarDto,
  ) {
    return this.carservice.update(id, updatecar);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carservice.delete(id);
  }
}
