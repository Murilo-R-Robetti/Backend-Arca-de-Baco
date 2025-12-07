import { VinhoService } from "../services/vinho.service.js";

export class VinhoController {
  constructor() {
    this.service = new VinhoService();
  }

  async create(data) {
    try {
      const vinho = await this.service.createVinho(data);
      return Response.json(vinho, { status: 201 });
    } catch (error) {
      return Response.json(
        { error: error.message || "Erro ao criar vinho" },
        { status: 400 }
      );
    }
  }

  async list() {
    try {
      const vinhos = await this.service.listVinhos();
      return Response.json(vinhos, { status: 200 });
    } catch (error) {
      return Response.json(
        { error: error.message || "Erro ao listar vinhos" },
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
      const result = await this.service.deleteVinho(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json(
        { error: error.message || "Erro ao deletar vinho" },
        { status: 400 }
      );
    }
  }

  async update(data) {
  try {
    const result = await this.service.updateVinho(data);
    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: error.message || "Erro ao atualizar vinho" },
      { status: 400 }
    );
  }
}

}
