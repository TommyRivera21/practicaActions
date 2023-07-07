import { IsNotEmpty, IsString } from "class-validator";

export class CreateEncuestaDto {
  @IsString()
  @IsNotEmpty()
  preguntaEncuesta:string;

  @IsString()
  @IsNotEmpty()
  campoAmplio:string;
  
  @IsString()
  @IsNotEmpty()
  tipoPregunta:string;
}