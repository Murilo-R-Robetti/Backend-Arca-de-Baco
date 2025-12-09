import { VinicolaRepository } from "../repositories/vinicola.repository.js";

export class VinicolaService {
  constructor() {
    this.repo = new VinicolaRepository();
  }

async createVinicola(data) {
  const { name, regiao, contato } = data;

  if (!name || !regiao || !contato) {
    throw new Error("Nome, região e contato são obrigatórios.");
  }

  const exists = await this.repo.findByName(name);
  if (exists) {
    throw new Error("Já existe uma Vinícola cadastrada com esse nome.");
  }

    return this.repo.create({ name, regiao, contato });
  }

  async listVinicola() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const vinicola = await this.repo.findById(id);
    if (!vinicola) throw new Error("Vinicola não encontrada.");

    return vinicola;
  }

  async deleteVinicola(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Vinicola não encontrado.");

    return this.repo.delete(id);
  }

async updateVinicola(data) {
  const { id, name, regiao, contato } = data;

  if (!id) throw new Error("ID é obrigatório.");

  const exists = await this.repo.findById(id);
  if (!exists) throw new Error("Vinícola não encontrada.");

  const updateData = {};
  if (name) updateData.name = name;
  if (regiao) updateData.regiao = regiao;
  if (contato !== undefined) updateData.contato = contato;

  return this.repo.update(id, updateData);
}

}

// Feito