import { CompraRepository } from "../repositories/compra.repository.js";
import { supabase } from "@/infra/supabase.js";

export class CompraService {
  constructor() {
    this.repo = new CompraRepository();
  }

  async createCompra(data) {
    const { formas_pagamento, id_cliente } = data;

    if (!formas_pagamento || !id_cliente) {
      throw new Error("Forma de pagamento e ID do cliente são obrigatórios.");
    }

    const { data: cliente, error } = await supabase
      .from("clientes")
      .select("*")
      .eq("id", id_cliente)
      .single();

    if (error || !cliente) {
      throw new Error("Cliente não encontrado.");
    }

    return this.repo.create({
      formas_pagamento,
      id_cliente
    });
  }

  async listCompra() {
    return this.repo.list();
  }

  async getOne(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const compra = await this.repo.findById(id);
    if (!compra) throw new Error("Compra não encontrada.");

    return compra;
  }

  async deleteCompra(id) {
    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Compra não encontrada.");

    return this.repo.delete(id);
  }

  async updateCompra(data) {
    const { id, formas_pagamento, id_cliente } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Compra não encontrada.");

    const updateData = {};
    if (formas_pagamento) updateData.formas_pagamento = formas_pagamento;
    if (id_cliente) updateData.id_cliente = id_cliente;

    return this.repo.update(id, updateData);
  }
}
// Feito