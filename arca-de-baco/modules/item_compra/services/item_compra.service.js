import { ItemCompraRepository } from "../repositories/item_compra.repository.js";
import { supabase } from "@/infra/supabase.js";

export class ItemCompraService {
  constructor() {
    this.repo = new ItemCompraRepository();
  }

  async create(data) {
    const { id_vinho, id_compra, preco, quantidade = 1 } = data;

    if (!id_vinho || !id_compra || !preco)
      throw new Error("id_vinho, id_compra e preco são obrigatórios!");

    const { data: vinho } = await supabase
      .from("vinhos")
      .select("id")
      .eq("id", id_vinho)
      .single();
    if (!vinho) throw new Error("Vinho não encontrado.");

    const { data: compra } = await supabase
      .from("compra")
      .select("id")
      .eq("id", id_compra)
      .single();
    if (!compra) throw new Error("Compra não encontrada.");

    return this.repo.create({
      id_vinho,
      id_compra,
      preco,
      quantidade,
    });
  }

  async list() {
    return this.repo.list();
  }

  async delete(id) {
    if (!id) throw new Error("ID é obrigatório");
    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Item não encontrado");
    return this.repo.delete(id);
  }

  async update(data) {
    const { id, preco, quantidade, id_vinho } = data;

    if (!id) throw new Error("ID é obrigatório.");

    const exists = await this.repo.findById(id);
    if (!exists) throw new Error("Item não encontrado.");

    return this.repo.update(id, {
      preco,
      quantidade,
      id_vinho,
    });
  }
}

// Feito