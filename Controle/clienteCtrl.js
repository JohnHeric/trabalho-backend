//É a classe responsável por traduzir requisições HTTP e produzir respostas HTTP
import Cliente from "../Modelo/cliente.js";

export default class ClienteCtrl {

    gravar(requisicao, resposta) {
        //preparar o destinatário que a resposta estará no formato JSON
        resposta.type("application/json");
        //Verificando se o método da requisição é POST e conteúdo é JSON
        if (requisicao.method == 'POST' && requisicao.is("application/json")) {
            const nome = requisicao.body.nome;
            const endereco = requisicao.body.endereco;
            const cidade = requisicao.body.cidade;
            const cep = requisicao.body.cep;
          
                //pseudo validação
                if (nome && endereco && cidade && cep){
                    const cliente = new Cliente(0,nome, endereco, cidade,cep);
                    //cliente.incluir()
                    cliente.incluir()
                        .then(() => {
                            resposta.status(200).json({
                                "status": true,
                                "mensagem": "Produto adicionado com sucesso!",
                                "codigo": cliente.codigo
                            });
                        })
                        .catch((erro) => {
                            resposta.status(500).json({
                                "status": false,
                                "mensagem": "Não foi possível incluir o produto: " + erro.message
                            });
                        });
                }
                else {
                    resposta.status(400).json(
                        {
                            "status": false,
                            "mensagem": "Informe corretamente todos os dados de um produto conforme documentação da API."
                        }
                    );
                }
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "A categoria informada não existe!"
                });
            }
    }

    editar(requisicao, resposta) {
        //preparar o destinatário que a resposta estará no formato JSON
        resposta.type("application/json");
        //Verificando se o método da requisição é POST e conteúdo é JSON
        if ((requisicao.method == 'PUT' || requisicao.method == 'PATCH') && requisicao.is("application/json")) {
            //o código será extraída da URL (padrão REST)
            const codigo = requisicao.params.codigo;
            const nome = requisicao.body.nome;
            const endereco = requisicao.body.endereco;
            const cidade = requisicao.body.cidade;
            const cep = requisicao.body.cep;

            //validação de regra de negócio
            
            if (codigo > 0 && nome && endereco && cidade && cep) {

                const cliente = new Cliente(codigo, nome, endereco, cidade, cep);
                cliente.alterar()
                    .then(() => {
                        resposta.status(200).json({
                            "status": true,
                            "mensagem": "Produto alterado com sucesso!",
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Não foi possível alterar o produto: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json(
                    {
                        "status": false,
                        "mensagem": "Informe corretamente todos os dados de um produto conforme documentação da API."
                    }
                );
            }

        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida! Consulte a documentação da API."
            });

        }
    }

    excluir(requisicao, resposta) {
        //preparar o destinatário que a resposta estará no formato JSON
        resposta.type("application/json");
        //Verificando se o método da requisição é POST e conteúdo é JSON
        if (requisicao.method == 'DELETE') {
            //o código será extraída da URL (padrão REST)
            const codigo = requisicao.params.codigo;
            //pseudo validação
            if (codigo > 0) {
                //alterar o produto
                const cliente = new Cliente(codigo);
                cliente.excluir()
                    .then(() => {
                        resposta.status(200).json({
                            "status": true,
                            "mensagem": "Produto excluído com sucesso!",
                        });
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Não foi possível excluir o produto: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json(
                    {
                        "status": false,
                        "mensagem": "Informe um código válido de um produto conforme documentação da API."
                    }
                );
            }

        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida! Consulte a documentação da API."
            });

        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if (requisicao.method == "GET") {
            let codigo = requisicao.params.codigo;
            //evitar que código tenha valor undefined
            if (isNaN(codigo)) {
                codigo = "";
            }

            const cliente = new Cliente();
            //método consultar retorna uma lista de produtos
            cliente.consultar(codigo)
                .then((listaClientes) => {
                    resposta.status(200).json(listaClientes
                        /*{
                            "status": true,
                            "listaProdutos": listaProdutos
                        }*/
                    );
                })
                .catch((erro) => {
                    resposta.status(500).json(
                        {
                            "status": false,
                            "mensagem": "Erro ao consultar produtos: " + erro.message
                        }
                    );
                });

        }
        else {
            resposta.status(400).json(
                {
                    "status": false,
                    "mensagem": "Requisição inválida! Consulte a documentação da API."
                }
            );
        }
    }

}