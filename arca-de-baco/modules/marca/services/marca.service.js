import { MarcaRepository } from "../repositories/marca.repository.js";

export class MarcaService {
  constructor() {
    this.repo = new MarcaRepository();
  }

  async createMarca(data) {
    const { name } = data;

    if (!name) {
      throw new Error("O nome é obrigatório.");
    }

    return this.repo.create({ name });
  }

  async listMarca() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const marca = await this.repo.findById(id);
    if (!marca) throw new Error("Marca não encontrada.");

    return marca;
  }

  async deleteMarca(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Marca não encontrada.");

    return this.repo.delete(id);
  }

  async updateMarca(data) {
    const { id, name } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Marca não encontrada.");

    const updateData = {};
    if (name) updateData.name = name;

    return this.repo.update(id, updateData);
  }
}
