import { Router } from "express"; // micro-aplicação HTTP
import ClienteCtrl from "../Controle/clienteCtrl.js"; // Controlador de cliente

const clienteCtrl = new ClienteCtrl();
const rotaCliente = Router();

rotaCliente.post("/", clienteCtrl.gravar);
rotaCliente.put("/:codigo", clienteCtrl.editar);
rotaCliente.patch("/:codigo", clienteCtrl.editar);
rotaCliente.delete("/:codigo", clienteCtrl.excluir);
rotaCliente.get("/:codigo", clienteCtrl.consultar);
rotaCliente.get("/", clienteCtrl.consultar);

export default rotaCliente;