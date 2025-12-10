import { Vinicola_tem_marcaService } from "../services/vinicola_tem_marca.service.js";

export class Vinicola_tem_marcaController {
  constructor() {
    this.service = new Vinicola_tem_marcaService();
  }

  async create(data) {
    try {
      const vinicola_tem_marca = await this.service.createVinicola_tem_marca(data);
      return Response.json(vinicola_tem_marca, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const vinicola_tem_marca = await this.service.listVinicola_tem_marca();
      return Response.json(vinicola_tem_marca, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const vinicola_tem_marca = await this.service.getOne(id);
      return Response.json(vinicola_tem_marca, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteVinicola_tem_marca(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateVinicola_tem_marca(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}
