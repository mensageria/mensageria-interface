import { Usuario } from "./usuario";

export class Dispositivo {
    constructor(
        public id?: number,
        public nome?: string,
        public pushToken?: string,
        public proprietario?: Usuario) { }
}