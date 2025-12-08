import { supabase } from "@/infra/supabase.js";

export class CompraRepository {
  async findById(id) {
    const { data, error } = await supabase
      .from("compra")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: compra, error } = await supabase
      .from("compra")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return compra;
  }

  async list() {
    const { data, error } = await supabase
      .from("compra")
      .select("*");

    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("compra")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Compra deletada com sucesso." };
  }

  async update(id, data) {
    const { data: updated, error } = await supabase
      .from("compra")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return updated;
  }
}
// Feito