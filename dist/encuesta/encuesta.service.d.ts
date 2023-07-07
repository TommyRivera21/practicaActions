import { CreateEncuestaDto } from "./dto/create-encuesta.dto";
import { UpdateEncuestaDto } from "./dto/update-encuesta.dto";
import { Encuesta } from "./entities/encuesta.entity";
export declare class EncuestaService {
    private encuestas;
    create(createEncuestaDto: CreateEncuestaDto): Encuesta;
    findAll(): Encuesta[];
    findOne(id: number): Encuesta;
    update(id: number, updateEncuestaDto: UpdateEncuestaDto): Encuesta;
    remove(id: number): void;
}
