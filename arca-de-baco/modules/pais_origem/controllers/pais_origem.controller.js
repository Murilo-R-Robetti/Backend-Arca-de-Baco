import { Pais_origemService } from "../services/pais_origem.service.js";

export class Pais_origemController {
  constructor() {
    this.service = new Pais_origemService();
  }

  async create(data) {
    try {
      const pais_origem = await this.service.createPais_origem(data);
      return Response.json(pais_origem, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const pais_origem = await this.service.listPais_origem();
      return Response.json(pais_origem, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const pais_origem = await this.service.getOne(id);
      return Response.json(pais_origem, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deletePais_origem(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updatePais_origem(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}
// Feito