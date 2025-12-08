import { SommelierRepository } from "../repositories/sommelier.repository";

export class SommelierService {
  constructor() {
    this.repo = new SommelierRepository();
  }

  async createSommelier(data) {
    const { name, especialidade, contato } = data;

    if (!name || !especialidade) {
      throw new Error("Nome e especialidade são obrigatórios.");
    }

    const exists = await this.repo.findByName(name);
    if (exists) {
      throw new Error("Já existe um sommelier cadastrado com esse nome.");
    }

    return this.repo.create({ name, especialidade, contato });
  }

  async listSommelier() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const registro = await this.repo.findById(id);
    if (!registro) throw new Error("Sommelier não encontrado.");

    return registro;
  }

  async deleteSommelier(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Sommelier não encontrado.");

    return this.repo.delete(id);
  }

  async updateSommelier(data) {
    const { id, name, especialidade, contato } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Sommelier não encontrado.");

    const changes = {};
    if (name) changes.name = name;
    if (especialidade) changes.especialidade = especialidade;
    if (contato !== undefined) changes.contato = contato;

    return this.repo.update(id, changes);
  }
}

// Feito