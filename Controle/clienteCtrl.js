/*import Cliente from "../Modelo/cliente.js";  // Presume-se que o modelo Cliente exista.

export default class ClienteCtrl {

    gravar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method == 'POST' && requisicao.is("application/json")) {
            //const { nome, endereco, cidade, cep, telefone } = requisicao.body;
            const nome = requisicao.body.nome;
            const endereco = requisicao.body.endereco;
            const cidade = requisicao.body.cidade;
            const cep = requisicao.body.cep;
            const telefone = requisicao.body.telefone;


            if (nome && endereco && cidade && cep && telefone) {
                const cliente = new Cliente(nome, endereco, cidade, cep, telefone);
                cliente.gravar()
                    .then(() => {
                        resposta.status(200).json({
                            "status": true,
                            "mensagem": "Cliente adicionado com sucesso!",
                            "codigo": cliente.codigo
                        });
                    })
                    .catch(erro => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Não foi possível incluir o cliente: parou aqui meu jovem" + erro.message,
                        });
                    });
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe todos os dados obrigatórios do cliente conforme documentação da API.",
                });
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }

    editar(requisicao, resposta) {
        resposta.type("application/json");
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is("application/json")) {
            const codigo = requisicao.params.codigo;
            const { nome, endereco, cidade, cep, telefone } = requisicao.body;

            if (codigo > 0 && nome && endereco && cidade && cep && telefone) {
                const cliente = new Cliente(nome, endereco, cidade, cep, telefone);
                cliente.codigo = codigo;
                cliente.editar()
                    .then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Cliente atualizado com sucesso!",
                        });
                    })
                    .catch(erro => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Não foi possível atualizar o cliente: " + erro.message,
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe corretamente todos os dados do cliente conforme a documentação da API.",
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === 'DELETE') {
            const codigo = requisicao.params.codigo;
            if (codigo > 0) {
                const cliente = new Cliente();
                cliente.codigo = codigo;
                cliente.excluir()
                    .then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Cliente excluído com sucesso!",
                        });
                    })
                    .catch(erro => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Não foi possível excluir o cliente: " + erro.message,
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe um código válido de cliente.",
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            let codigo = requisicao.params.codigo || "";
            const cliente = new Cliente();
            cliente.consultar(codigo)
                .then(listaClientes => {
                    resposta.status(200).json(listaClientes);
                })
                .catch(erro => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar clientes: " + erro.message,
                    });
                });
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }
}
*/

import Cliente from "../Modelo/cliente.js"; // Presume-se que o modelo Cliente exista.

export default class ClienteCtrl {

    gravar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === 'POST' && requisicao.is("application/json")) {
            const { nome, endereco, cidade, cep, telefone } = requisicao.body;

            if (nome && endereco && cidade && cep && telefone) {
                const cliente = new Cliente(nome, endereco, cidade, cep, telefone);
                cliente.gravar()
                    .then(() => {
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Cliente adicionado com sucesso!",
                            codigo: cliente.codigo
                        });
                    })
                    .catch(erro => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Não foi possível incluir o cliente: xxx" + erro.message,
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados obrigatórios do cliente conforme a documentação da API.",
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }

    editar(requisicao, resposta) {
        resposta.type("application/json");
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is("application/json")) {
            const codigo = parseInt(requisicao.params.codigo, 10);
            const { nome, endereco, cidade, cep, telefone } = requisicao.body;

            if (codigo > 0 && nome && endereco && cidade && cep && telefone) {
                const cliente = new Cliente();
                cliente.consultar(codigo)
                    .then(listaClientes => {
                        if (listaClientes.length === 0) {
                            resposta.status(404).json({
                                status: false,
                                mensagem: "Cliente não encontrado.",
                            });
                        } else {
                            const clienteAtualizado = new Cliente(nome, endereco, cidade, cep, telefone);
                            clienteAtualizado.codigo = codigo;
                            clienteAtualizado.editar()
                                .then(() => {
                                    resposta.status(200).json({
                                        status: true,
                                        mensagem: "Cliente atualizado com sucesso!",
                                    });
                                })
                                .catch(erro => {
                                    resposta.status(500).json({
                                        status: false,
                                        mensagem: "Não foi possível atualizar o cliente: " + erro.message,
                                    });
                                });
                        }
                    })
                    .catch(erro => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao consultar cliente: " + erro.message,
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe corretamente todos os dados do cliente conforme a documentação da API.",
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === 'DELETE') {
            const codigo = parseInt(requisicao.params.codigo, 10);
            if (codigo > 0) {
                const cliente = new Cliente();
                cliente.consultar(codigo)
                    .then(listaClientes => {
                        if (listaClientes.length === 0) {
                            resposta.status(404).json({
                                status: false,
                                mensagem: "Cliente não encontrado.",
                            });
                        } else {
                            cliente.codigo = codigo;
                            cliente.excluir()
                                .then(() => {
                                    resposta.status(200).json({
                                        status: true,
                                        mensagem: "Cliente excluído com sucesso!",
                                    });
                                })
                                .catch(erro => {
                                    resposta.status(500).json({
                                        status: false,
                                        mensagem: "Não foi possível excluir o cliente: " + erro.message,
                                    });
                                });
                        }
                    })
                    .catch(erro => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao consultar cliente: " + erro.message,
                        });
                    });
            } else {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe um código válido de cliente.",
                });
            }
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            const codigo = requisicao.params.codigo || "";
            const cliente = new Cliente();
            cliente.consultar(codigo)
                .then(listaClientes => {
                    if (listaClientes.length === 0) {
                        resposta.status(404).json({
                            status: false,
                            mensagem: "Nenhum cliente encontrado.",
                        });
                    } else {
                        resposta.status(200).json(listaClientes);
                    }
                })
                .catch(erro => {
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar clientes: " + erro.message,
                    });
                });
        } else {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição inválida! Consulte a documentação da API.",
            });
        }
    }
}
