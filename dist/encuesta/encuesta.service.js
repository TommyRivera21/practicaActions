"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuestaService = void 0;
const common_1 = require("@nestjs/common");
const encuesta_entity_1 = require("./entities/encuesta.entity");
let EncuestaService = class EncuestaService {
    constructor() {
        this.encuestas = [
            {
                id: 1,
                preguntaEncuesta: "¿Qué tan satisfecho se encuentra con el servicio de la institución?",
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
    }
    create(createEncuestaDto) {
        const encuesta = new encuesta_entity_1.Encuesta();
        encuesta.id =
            Math.max(...this.encuestas.map((elemento) => elemento.id), 0) + 1;
        encuesta.preguntaEncuesta = createEncuestaDto.preguntaEncuesta;
        encuesta.campoAmplio = createEncuestaDto.campoAmplio;
        encuesta.tipoPregunta = createEncuestaDto.tipoPregunta;
        this.encuestas.push(encuesta);
        return encuesta;
    }
    findAll() {
        return this.encuestas;
    }
    findOne(id) {
        const encuesta = this.encuestas.find((encuesta) => encuesta.id === id);
        if (!encuesta)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return encuesta;
    }
    update(id, updateEncuestaDto) {
        const { preguntaEncuesta, campoAmplio, tipoPregunta } = updateEncuestaDto;
        const encuesta = this.findOne(id);
        if (preguntaEncuesta)
            encuesta.preguntaEncuesta = preguntaEncuesta;
        if (campoAmplio)
            encuesta.campoAmplio = campoAmplio;
        if (tipoPregunta)
            encuesta.tipoPregunta = tipoPregunta;
        this.encuestas = this.encuestas.map((elemento) => {
            if (elemento.id === id)
                return encuesta;
            return elemento;
        });
        return encuesta;
    }
    remove(id) {
        this.findOne(id);
        this.encuestas = this.encuestas.filter((elemento) => elemento.id !== id);
    }
};
EncuestaService = __decorate([
    (0, common_1.Injectable)()
], EncuestaService);
exports.EncuestaService = EncuestaService;
//# sourceMappingURL=encuesta.service.js.map