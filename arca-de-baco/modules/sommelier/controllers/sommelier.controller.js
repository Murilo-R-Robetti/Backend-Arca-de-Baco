import { SommelierService } from "../services/sommelier.service";

export class SommelierController {
  constructor() {
    this.service = new SommelierService();
  }

  async list() {
    try {
      const result = await this.service.listSommelier();
      return Response.json(result);
    } catch (error) {
      return new Response(error.message, { status: 400 });
    }
  }

  async create(body) {
    try {
      const result = await this.service.createSommelier(body);
      return Response.json(result);
    } catch (error) {
      return new Response(error.message, { status: 400 });
    }
  }

  async delete(id) {
    try {
      const result = await this.service.deleteSommelier(id);
      return Response.json(result);
    } catch (error) {
      return new Response(error.message, { status: 400 });
    }
  }

  async update(body) {
    try {
      const result = await this.service.updateSommelier(body);
      return Response.json(result);
    } catch (error) {
      return new Response(error.message, { status: 400 });
    }
  }
}

// Feito