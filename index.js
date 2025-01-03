import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import rotaProduto from './Rotas/rotaProdutos.js';
import rotaCategoria from './Rotas/rotaCategoria.js';
import rotaCliente from './Rotas/rotaCliente.js';

dotenv.config();

const host = "0.0.0.0";
const porta = 4000;
const app = express();

app.use(express.json());

app.use(cors({
                "origin":"*",
                "Access-Control-Allow-Origin":'*'
            }));

app.use(express.static('./publico'));

app.use("/produtos",rotaProduto);
app.use("/categorias",rotaCategoria);
app.use("/clientes",rotaCliente);

app.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`)
});