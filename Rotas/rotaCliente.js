import { Router } from "express"; // micro-aplicação HTTP
import ClienteCtrl from "../Controle/clienteCtrl.js"; // Controlador de cliente

const clienteCtrl = new ClienteCtrl();
const rotaCliente = Router();

// Associando os métodos da camada de controle aos endpoints

rotaCliente.post("/", clienteCtrl.gravar); // Criar um novo cliente
rotaCliente.put("/:codigo", clienteCtrl.editar); // Atualizar cliente (PUT)
rotaCliente.patch("/:codigo", clienteCtrl.editar); // Atualizar cliente (PATCH)
rotaCliente.delete("/:codigo", clienteCtrl.excluir); // Excluir um cliente
rotaCliente.get("/:codigo", clienteCtrl.consultar); // Consultar cliente específico
rotaCliente.get("/", clienteCtrl.consultar); // Consultar todos os clientes

export default rotaCliente;
