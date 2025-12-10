import { FornecedorService } from "../services/fornecedor.service.js";

export class FornecedorController {
  constructor() {
    this.service = new FornecedorService();
  }

  async create(data) {
    try {
      const fornecedor = await this.service.createFornecedor(data);
      return Response.json(fornecedor, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const fornecedor = await this.service.listFornecedor();
      return Response.json(fornecedor, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const fornecedor = await this.service.getOne(id);
      return Response.json(fornecedor, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteFornecedor(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateFornecedor(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}

