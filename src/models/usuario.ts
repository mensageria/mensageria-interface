export class Usuario {
    constructor(
        public id?: number,
        public email?: string,
        public emailConfirmado?: boolean,
        public nome?: string,
        public ultimoAcesso?: Date,
        public prioridade?: number,
        public selecionado?: boolean,
    ) { }
}