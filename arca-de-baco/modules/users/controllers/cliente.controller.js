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
}
