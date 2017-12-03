import { Conversa } from './conversa';
import { Usuario } from './usuario';
import { Recebido } from './recebido';
export class Mensagem {
    constructor(
        public id?: number,
        public conteudo?: string,
        public dataEnvio?: Date,
        public autor?: Usuario,
        public chat?: Conversa,
        public listaRecebidos?: Recebido[]
    ) { }
}