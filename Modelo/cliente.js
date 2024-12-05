import ClienteDAO from "../Persistencia/clienteDAO.js"; // Suponha que exista um ClienteDAO

export default class Cliente {
    // Atributos privados usando a sintaxe #
    #codigo;
    #nome;
    #endereco;
    #cidade;
    #cep;
    #telefone;

    // Construtor da classe
    constructor(codigo=0, nome="", endereco="", cidade="", cep="", telefone="") {
        this.#codigo = codigo;
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

    // Métodos get e set para o atributo nome
    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }

    // Métodos get e set para o atributo endereco
    get endereco() {
        return this.#endereco;
    }

    set endereco(value) {
        this.#endereco = value;
    }

    // Métodos get e set para o atributo cidade
    get cidade() {
        return this.#cidade;
    }

    set cidade(value) {
        this.#cidade = value;
    }

    // Métodos get e set para o atributo cep
    get cep() {
        return this.#cep;
    }

    set cep(value) {
        this.#cep = value;
    }

    // Métodos get e set para o atributo telefone
    get telefone() {
        return this.#telefone;
    }

    set telefone(value) {
        this.#telefone = value;
    }

    // Método toJSON para conversão em JSON
    toJSON() {
        return {
            "nome": this.#nome,
            "endereco": this.#endereco,
            "cidade": this.#cidade,
            "cep": this.#cep,
            "telefone": this.#telefone
        };
    }

    // Métodos assíncronos para manipulação de dados
    async incluir() {
        const clienteDAO = new ClienteDAO();
        await clienteDAO.incluir(this);
    }

    async consultar(termo) {
        const clienteDAO = new ClienteDAO();
        return await clienteDAO.consultar(termo);
    }

    async excluir() {
        const clienteDAO = new ClienteDAO();
        await clienteDAO.excluir(this);
    }

    async alterar() {
        const clienteDAO = new ClienteDAO();
        await clienteDAO.editar(this);
    }
}
