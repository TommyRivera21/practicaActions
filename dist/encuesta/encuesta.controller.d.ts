import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { Encuesta } from './entities/encuesta.entity';
export declare class EncuestaController {
    private readonly encuestaService;
    constructor(encuestaService: EncuestaService);
    create(CreateEncuestaDto: CreateEncuestaDto): Encuesta;
    findAll(): Encuesta[];
    findOne(id: number): Encuesta;
    update(id: string, updateEncuestaDto: UpdateEncuestaDto): Encuesta;
    remove(id: string): void;
}
