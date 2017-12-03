export class Conversa {
    constructor(
        public id?: number,
        public interativa?: boolean,
        public nome?: string,
        public qtdPessoas?: number,
        public qtdMensagens?: number,
        public dataCriacao?: Date,
    ) { }
}