export default class Cliente {
    #codigo;
    #nome;
    #endereco;
    #cidade;
    #cep;
    #telefone;

    constructor(nome, endereco, cidade, cep, telefone) {
        this.#nome = nome;
        this.#endereco = endereco;
        this.#cidade = cidade;
        this.#cep = cep;
        this.#telefone = telefone;
    }

    get codigo() {
        return this.#codigo;
    }

    set codigo(value) {
        this.#codigo = value;
    }

    get nome() {
        return this.#nome;
    }

    get endereco() {
        return this.#endereco;
    }

    get cidade() {
        return this.#cidade;
    }

    get cep() {
        return this.#cep;
    }

    get telefone() {
        return this.#telefone;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nome: this.#nome,
            endereco: this.#endereco,
            cidade: this.#cidade,
            cep: this.#cep,
            telefone: this.#telefone
        };
    }
}
