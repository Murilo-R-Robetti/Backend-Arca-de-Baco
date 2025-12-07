import { supabase } from "@/infra/supabase.js";

export class VinhoRepository {
  async findByName(name) {
    const { data, error } = await supabase
      .from("vinhos")
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
      .from("vinhos")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: vinho, error } = await supabase
      .from("vinhos")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return vinho;
  }

  async list() {
    const { data, error } = await supabase
      .from("vinhos")
      .select("*");

    if (error) throw error;

    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("vinhos")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Vinho deletado com sucesso." };
  }

  async update(id, data) {
  const { data: updated, error } = await supabase
    .from("vinhos")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return updated;
}
}
