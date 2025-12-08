import { CompraService } from "../services/compra.service.js";

export class CompraController {
  constructor() {
    this.service = new CompraService();
  }

  async create(data) {
    try {
      const compra = await this.service.createCompra(data);
      return Response.json(compra, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const compra = await this.service.listCompra();
      return Response.json(compra, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const compra = await this.service.getOne(id);
      return Response.json(compra, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteCompra(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateCompra(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}
// Feito
