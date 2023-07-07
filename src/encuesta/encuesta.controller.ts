import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { Encuesta } from './entities/encuesta.entity';

@Controller('encuesta')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Post()
  create(@Body() CreateEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.create(CreateEncuestaDto);
  }

  @Get()
  findAll() : Encuesta[] {
    return this.encuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.encuestaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncuestaDto: UpdateEncuestaDto) {
    return this.encuestaService.update(+id, updateEncuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuestaService.remove(+id);
  }
}