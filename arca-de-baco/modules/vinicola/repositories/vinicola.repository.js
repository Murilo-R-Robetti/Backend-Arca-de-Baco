import { supabase } from "@/infra/supabase.js";

export class VinicolaRepository {
  async findByName(name) {
    const { data, error } = await supabase
      .from("vinicola")
      .select("*")
      .eq("name", name)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async findById(id) {
    const { data, error } = await supabase
      .from("vinicola")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: vinicola, error } = await supabase
      .from("vinicola")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return vinicola;
  }

  async list() {
    const { data, error } = await supabase
      .from("vinicola")
      .select("*");

    if (error) throw error;

    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("vinicola")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Vinicola deletado com sucesso." };
  }

  async update(id, data) {
  const { data: updated, error } = await supabase
    .from("vinicola")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return updated;
}
}
// Feito
