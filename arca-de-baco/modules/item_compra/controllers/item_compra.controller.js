import { ItemCompraService } from "../services/item_compra.service.js";

export class ItemCompraController {
  constructor() {
    this.service = new ItemCompraService();
  }

  async create(data) {
    try {
      const item = await this.service.create(data);
      return Response.json(item, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const items = await this.service.list();
      return Response.json(items, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.delete(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const item = await this.service.update(data);
      return Response.json(item, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}

// Feito