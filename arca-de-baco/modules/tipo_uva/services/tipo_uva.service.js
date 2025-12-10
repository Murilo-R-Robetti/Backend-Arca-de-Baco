import { Tipo_uvaRepository } from "../repositories/tipo_uva.repository.js";

export class Tipo_uvaService {
  constructor() {
    this.repo = new Tipo_uvaRepository();
  }

  async createTipo_uva(data) {
    const { name } = data;

    if (!name) {
      throw new Error("O nome é obrigatório.");
    }

    return this.repo.create({ name });
  }

  async listTipo_uva() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const tipo_uva = await this.repo.findById(id);
    if (!tipo_uva) throw new Error("Tipo da uva não encontrado.");

    return tipo_uva;
  }

  async deleteTipo_uva(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Tipo da uva não encontrado.");

    return this.repo.delete(id);
  }

  async updateTipo_uva(data) {
    const { id, name } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Tipo da uva não encontrado.");

    const updateData = {};
    if (name) updateData.name = name;

    return this.repo.update(id, updateData);
  }
}
