import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'La marca tiene que ser string' })
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
}
