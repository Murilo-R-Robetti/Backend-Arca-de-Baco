import { ClienteService } from "../services/cliente.service.js";

export class ClienteController {
  constructor() {
    this.service = new ClienteService();
  }

  async create(data) {
    try {
      const cliente = await this.service.createCliente(data);
      return Response.json(cliente, { status: 201 });
    } catch (error) {
      return Response.json(
        { error: error.message || "Erro ao criar usuário" },
        { status: 400 }
      );
    }
  }

  async list() {
    try {
      const clientes = await this.service.listClientes();
      return Response.json(clientes, { status: 200 });
    } catch (error) {
      return Response.json(
        { error: error.message || "Erro ao listar usuários" },
        { status: 400 }
      );
    }
  }

//   async delete(id) {
//   try {
//     const deleted = await this.service.deleteCliente(id);
//     return Response.json(deleted, { status: 200 });
//   } catch (error) {
//     return Response.json(
//       { error: error.message || "Erro ao deletar usuário" },
//       { status: 400 }
//     );
//   }
// }
  async delete(id) {
    try {
      const result = await this.service.deleteCliente(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json(
        { error: error.message || "Erro ao deletar usuário" },
        { status: 400 }
      );
    }
  }

  async update(data) {
  try {
    const result = await this.service.updateCliente(data);
    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: error.message || "Erro ao atualizar usuário" },
      { status: 400 }
    );
  }
}

}
