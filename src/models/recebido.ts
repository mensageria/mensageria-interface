export class Recebido {
    constructor(
        public id?: {
            mensagem?: number,
            usuario?: number
        },
        public recebido?: boolean,
        public vizualizado?: boolean,
    ) { }
}