import { Tipo_uvaService } from "../services/tipo_uva.service.js";

export class Tipo_uvaController {
  constructor() {
    this.service = new Tipo_uvaService();
  }

  async create(data) {
    try {
      const tipo_uva = await this.service.createTipo_uva(data);
      return Response.json(tipo_uva, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const tipo_uva = await this.service.listTipo_uva();
      return Response.json(tipo_uva, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const tipo_uva = await this.service.getOne(id);
      return Response.json(tipo_uva, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteTipo_uva(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateTipo_uva(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}