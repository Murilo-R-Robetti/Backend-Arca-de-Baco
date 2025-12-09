import { VinhoRepository } from "../repositories/vinho.repository.js";
import { VinicolaRepository } from "../../vinicola/repositories/vinicola.repository.js";
import { Pais_origemRepository } from "../../pais_origem/repositories/pais_origem.repository.js";

export class VinhoService {
  constructor() {
    this.repo = new VinhoRepository();
    this.vinicolaRepo = new VinicolaRepository();
    this.paisRepo = new Pais_origemRepository();
  }

  async createVinho(data) {
    const { name, safra, estoque, vinicola_id, pais_origem_id } = data;

    if (!name || !safra) {
      throw new Error("Nome e safra são obrigatórios.");
    }

    const exists = await this.repo.findByName(name);
    if (exists) {
      throw new Error("Já existe um vinho cadastrado com esse nome.");
    }
    if (vinicola_id) {
      const vinicola = await this.vinicolaRepo.findById(vinicola_id);
      if (!vinicola) throw new Error("Vinícola não encontrada.");
    }

    if (pais_origem_id) {
      const pais = await this.paisRepo.findById(pais_origem_id);
      if (!pais) throw new Error("País de origem não encontrado.");
    }


    return this.repo.create({ name, safra, estoque: estoque ?? 0, vinicola_id, pais_origem_id });
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
    const { id, name, safra, estoque, vinicola_id, pais_origem_id } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Vinho não encontrado.");

    if (vinicola_id) {
      const vinicola = await this.vinicolaRepo.findById(vinicola_id);
      if (!vinicola) throw new Error("Vinícola não encontrada.");
    }

    if (pais_origem_id) {
      const pais = await this.paisRepo.findById(pais_origem_id);
      if (!pais) throw new Error("País de origem não encontrado.");
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (safra) updateData.safra = safra;
    if (vinicola_id) updateData.vinicola_id = vinicola_id;
    if (pais_origem_id) updateData.pais_origem_id = pais_origem_id;
    if (estoque !== undefined) updateData.estoque = estoque;

    return this.repo.update(id, updateData);
  }
}

// Tá parcialmente pronto, é preciso ter as outras tabelas de dependência.
