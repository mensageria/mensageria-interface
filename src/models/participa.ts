import { Conversa } from './conversa';
import { Usuario } from "./usuario";

export class Participa{
    constructor(
        public id?: number,
        public usuario?: Usuario,
        public conversa?: Conversa
    ){}
}