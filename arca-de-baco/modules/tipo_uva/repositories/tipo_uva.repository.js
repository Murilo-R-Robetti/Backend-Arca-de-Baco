import { supabase } from "@/infra/supabase.js";

export class Tipo_uvaRepository {
  async findById(id) {
    const { data, error } = await supabase
      .from("tipo_uva")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: tipo_uva, error } = await supabase
      .from("tipo_uva")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return tipo_uva;
  }

  async list() {
    const { data, error } = await supabase
      .from("tipo_uva")
      .select("*");

    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("tipo_uva")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Tipo da uva deletado com sucesso." };
  }

  async update(id, data) {
    const { data: updated, error } = await supabase
      .from("tipo_uva")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return updated;
  }
}
