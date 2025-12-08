import { VinhoRepository } from "../repositories/vinho.repository.js";

export class VinhoService {
  constructor() {
    this.repo = new VinhoRepository();
  }

  async createVinho(data) {
    const { name, safra, estoque } = data;

    if (!name || !safra) {
      throw new Error("Nome e safra são obrigatórios.");
    }

    const exists = await this.repo.findByName(name);
    if (exists) {
      throw new Error("Já existe um vinho cadastrado com esse nome.");
    }

    return this.repo.create({ name, safra, estoque });
  }

  async listVinhos() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const vinho = await this.repo.findById(id);
    if (!vinho) throw new Error("Vinho não encontrado.");

    return vinho;
  }

  async deleteVinho(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Vinho não encontrado.");

    return this.repo.delete(id);
  }

  async updateVinho(data) {
    const { id, name, safra, estoque } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Vinho não encontrado.");

    const updateData = {};
    if (name) updateData.name = name;
    if (safra) updateData.safra = safra;
    if (estoque !== undefined) updateData.estoque = estoque;

    return this.repo.update(id, updateData);
  }
}

// Precisa terminar
