import { FornecedorRepository } from "../repositories/fornecedor.repository.js";

export class FornecedorService {
  constructor() {
    this.repo = new FornecedorRepository();
  }

  async createFornecedor(data) {
    const { name, pais, contato} = data;

    if (!name || !pais|| !contato) {
      throw new Error("Nome, país e contato são obrigatórios.");
    }

    const exists = await this.repo.findByName(name);
    if (exists) {
      throw new Error("Já existe um fornecedor cadastrado com esse nome.");
    }

    return this.repo.create({ name, pais, contato });
  }

  async listFornecedor() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const fornecedor = await this.repo.findById(id);
    if (!fornecedor) throw new Error("Fornecedor não encontrado.");

    return fornecedor;
  }

  async deleteFornecedor(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Fornecedor não encontrado.");

    return this.repo.delete(id);
  }

  async updateFornecedor(data) {
    const { id, name, pais, contato } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Fornecedor não encontrado.");

    const updateData = {};
    if (name) updateData.name = name;
    if (pais) updateData.pais = pais;
    if (contato) updateData.contato = contato;
    return this.repo.update(id, updateData);
  }
}

