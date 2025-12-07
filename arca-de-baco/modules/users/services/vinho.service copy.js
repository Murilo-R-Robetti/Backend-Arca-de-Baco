import { VinhoRepository } from "../repositories/vinho.repository.js";

export class VinhoService {
  constructor() {
    this.repo = new VinhoRepository();
  }

  async createVinho(data) {
    const { name, safra } = data;

    if (!name || !safra || !estoque) {
      throw new Error("Nome e safra  são obrigatórios");
    }

    const exists = await this.repo.findByName(Name);
    if (exists) {
      throw new Error("Já existe um usuário cadastrado com esse email.");
    }

    return this.repo.create({ name, email, password, phone, age });
  }

  async listClientes() {
    return this.repo.list();
  }

//   async deleteCliente(id) {
//   if (!id) throw new Error("ID é obrigatório");

//   const deleted = await this.repo.delete(id);

//   if (!deleted) {
//     throw new Error("Usuário não encontrado");
//   }

//   return { message: "Usuário removido com sucesso" };
// }
 async deleteCliente(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Usuário não encontrado.");

    return this.repo.delete(id);
  }

  async updateCliente(data) {
  const { id, name, email, password, phone, age } = data;

  if (!id) throw new Error("ID é obrigatório.");

  const exists = await this.repo.findById(id);
  if (!exists) throw new Error("Usuário não encontrado.");

  const updateData = {};

  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (password) updateData.password = password;
  if (phone) updateData.phone = phone;
  if (age) {
    if (age < 18) throw new Error("O usuário deve ter pelo menos 18 anos.");
    updateData.age = age;
  }

  return this.repo.update(id, updateData);
}

}
