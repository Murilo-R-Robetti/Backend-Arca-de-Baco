import { ClienteRepository } from "../repositories/cliente.repository.js";

export class ClienteService {
  constructor() {
    this.repo = new ClienteRepository();
  }

  async createCliente(data) {
    const { name, email, password, phone, age } = data;

    if (!name || !email || !password) {
      throw new Error("Nome, email e senha são obrigatórios");
    }

    if (age && age < 18) {
      throw new Error("O usuário deve ter pelo menos 18 anos.");
    }

    const exists = await this.repo.findByEmail(email);
    if (exists) {
      throw new Error("Já existe um usuário cadastrado com esse email.");
    }

    return this.repo.create({ name, email, password, phone, age });
  }
}
