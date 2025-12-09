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
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const vinhos = await this.service.listVinhos();
      return Response.json(vinhos, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const vinho = await this.service.getOne(id);
      return Response.json(vinho, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteVinho(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateVinho(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}

// Tá parcialmente pronto, é preciso ter as outras tabelas de dependência.
// Falta add a Fk de id_tipo, id_tipo_uva e id_marca
