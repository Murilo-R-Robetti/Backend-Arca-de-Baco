import { Vinicola_tem_marcaRepository } from "../repositories/vinicola_tem_marca.repository.js";

export class Vinicola_tem_marcaService {
  constructor() {
    this.repo = new Vinicola_tem_marcaRepository();
  }

  async createVinicola_tem_marca(data) {
    const { id_vinicola, id_marca } = data;

    if (!id_vinicola || !id_marca) {
      throw new Error("ID da vinícola e da marca são obrigatórios.");
    }

    // Evita duplicação
    const relationExists = await this.repo.findRelation(id_vinicola, id_marca);
    if (relationExists) {
      throw new Error("Essa relação já existe.");
    }

    return this.repo.create({ id_vinicola, id_marca });
  }

  async listVinicola_tem_marca() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const rel = await this.repo.findById(id);
    if (!rel) throw new Error("Relação não encontrada.");

    return rel;
  }

  async deleteVinicola_tem_marca(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Relação não encontrada.");

    return this.repo.delete(id);
  }

  async updateVinicola_tem_marca(data) {
    const { id, id_vinicola, id_marca } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Relação não encontrada.");

    const updateData = {};
    if (id_vinicola) updateData.id_vinicola = id_vinicola;
    if (id_marca) updateData.id_marca = id_marca;

    return this.repo.update(id, updateData);
  }
}
