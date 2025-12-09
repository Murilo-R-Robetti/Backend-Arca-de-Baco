import { Pais_origemRepository } from "../repositories/pais_origem.repository.js";

export class Pais_origemService {
  constructor() {
    this.repo = new Pais_origemRepository();
  }

  async createPais_origem(data) {
    const { name } = data;

    if (!name) {
      throw new Error("O nome é obrigatório.");
    }

    return this.repo.create({ name });
  }

  async listPais_origem() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const pais_origem = await this.repo.findById(id);
    if (!pais_origem) throw new Error("País de origem não encontrado.");

    return pais_origem;
  }

  async deletePais_origem(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("País de origem não encontrado.");

    return this.repo.delete(id);
  }

  async updatePais_origem(data) {
    const { id, name } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("País de origem não encontrado.");

    const updateData = {};
    if (name) updateData.name = name;

    return this.repo.update(id, updateData);
  }
}
// Feito