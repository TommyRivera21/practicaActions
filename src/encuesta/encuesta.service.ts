import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEncuestaDto } from "./dto/create-encuesta.dto";
import { UpdateEncuestaDto } from "./dto/update-encuesta.dto";
import { Encuesta } from "./entities/encuesta.entity";

@Injectable()
export class EncuestaService {
  private encuestas: Encuesta[] = [
    {
      id: 1,
      preguntaEncuesta:
        "¿Qué tan satisfecho se encuentra con el servicio de la institución?",
      campoAmplio: "Servicio",
      tipoPregunta: "Abierta",
    },
    {
      id: 2,
      preguntaEncuesta: "¿Recomendaria el servicio de la institución?",
      campoAmplio: "Servicio",
      tipoPregunta: "Abierta",
    },
  ];

  create(createEncuestaDto: CreateEncuestaDto) {
    const encuesta = new Encuesta();
    encuesta.id =
      Math.max(...this.encuestas.map((elemento) => elemento.id), 0) + 1;
    encuesta.preguntaEncuesta = createEncuestaDto.preguntaEncuesta;
    encuesta.campoAmplio = createEncuestaDto.campoAmplio;
    encuesta.tipoPregunta = createEncuestaDto.tipoPregunta;
    this.encuestas.push(encuesta);
    return encuesta;
  }

  findAll(): Encuesta[] {
    return this.encuestas;
  }

  findOne(id: number) {
    const encuesta = this.encuestas.find((encuesta) => encuesta.id === id);
    if (!encuesta) throw new NotFoundException(`ID ${id} not found`);
    return encuesta;
  }

  update(id: number, updateEncuestaDto: UpdateEncuestaDto) {
    const { preguntaEncuesta, campoAmplio, tipoPregunta } = updateEncuestaDto;
    const encuesta = this.findOne(id);
    if (preguntaEncuesta) encuesta.preguntaEncuesta = preguntaEncuesta;
    if (campoAmplio) encuesta.campoAmplio = campoAmplio;
    if (tipoPregunta) encuesta.tipoPregunta = tipoPregunta;

    this.encuestas = this.encuestas.map((elemento) => {
      if (elemento.id === id) return encuesta;
      return elemento;
    });

    return encuesta;
  }

  remove(id: number) {
    this.findOne(id);
    this.encuestas = this.encuestas.filter((elemento) => elemento.id !== id);
  }
}
