import { supabase } from "@/infra/supabase.js";

export class Pais_origemRepository {
  async findById(id) {
    const { data, error } = await supabase
      .from("pais_origem")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: pais_origem, error } = await supabase
      .from("pais_origem")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return pais_origem;
  }

  async list() {
    const { data, error } = await supabase
      .from("pais_origem")
      .select("*");

    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("pais_origem")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "País de origem deletado com sucesso." };
  }

  async update(id, data) {
    const { data: updated, error } = await supabase
      .from("pais_origem")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return updated;
  }
}
// Feito