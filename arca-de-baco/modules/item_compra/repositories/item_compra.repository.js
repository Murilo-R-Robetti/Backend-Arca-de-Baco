import { supabase } from "@/infra/supabase.js";

export class ItemCompraRepository {
  async findById(id) {
    const { data, error } = await supabase
      .from("item_compra")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") throw error;
    return data;
  }

  async create(data) {
    const { data: item, error } = await supabase
      .from("item_compra")
      .insert(data)
      .select()
      .single();
    if (error) throw error;
    return item;
  }

  async list() {
    const { data, error } = await supabase.from("item_compra").select("*");
    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase.from("item_compra").delete().eq("id", id);
    if (error) throw error;
    return { message: "Item de compra deletado com sucesso." };
  }

  async update(id, data) {
    const { data: updated, error } = await supabase
      .from("item_compra")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return updated;
  }
}

// Feito