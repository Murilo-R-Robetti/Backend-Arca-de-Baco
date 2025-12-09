import { MarcaService } from "../services/marca.service.js";

export class MarcaController {
  constructor() {
    this.service = new MarcaService();
  }

  async create(data) {
    try {
      const marca = await this.service.createMarca(data);
      return Response.json(marca, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const marca = await this.service.listMarca();
      return Response.json(marca, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

async getOne(id) {
  try {
    const marca = await this.service.getOne(id);
    return Response.json(marca, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

  async delete(id) {
    try {
      const result = await this.service.deleteMarca(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateMarca(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}
