import { supabase } from "@/infra/supabase.js";

export class SommelierRepository {
  async findByName(name) {
    const { data, error } = await supabase
      .from("sommelier")
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
      .from("sommelier")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: sommelier, error } = await supabase
      .from("sommelier")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return sommelier;
  }

  async list() {
    const { data, error } = await supabase
      .from("sommelier")
      .select("*");

    if (error) throw error;

    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("sommelier")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Sommelier deletado com sucesso." };
  }

  async update(id, data) {
  const { data: updated, error } = await supabase
    .from("sommelier")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return updated;
}
}

// Feito
