import { VinicolaService } from "../services/vinicola.service.js";

export class VinicolaController {
  constructor() {
    this.service = new VinicolaService();
  }

  async create(data) {
    try {
      const vinicola = await this.service.createVinicola(data);
      return Response.json(vinicola, { status: 201 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async list() {
    try {
      const vinicola = await this.service.listVinicola();
      return Response.json(vinicola, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async getOne(id) {
    try {
      const vinicola = await this.service.getOne(id);
      return Response.json(vinicola, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteVinicola(id);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }

  async update(data) {
    try {
      const result = await this.service.updateVinicola(data);
      return Response.json(result, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }
  }
}
// Feito