import { supabase } from "@/infra/supabase.js";

export class MarcaRepository {
  async findById(id) {
    const { data, error } = await supabase
      .from("marca")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: marca, error } = await supabase
      .from("marca")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return marca;
  }

  async list() {
    const { data, error } = await supabase
      .from("marca")
      .select("*");

    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("marca")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Marca deletada com sucesso." };
  }

  async update(id, data) {
    const { data: updated, error } = await supabase
      .from("marca")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return updated;
  }
}
