import { supabase } from "@/infra/supabase.js";

export class FornecedorRepository {
  async findByName(name) {
    const { data, error } = await supabase
      .from("fornecedor")
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
      .from("fornecedor")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: fornecedor, error } = await supabase
      .from("fornecedor")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return fornecedor;
  }

  async list() {
    const { data, error } = await supabase
      .from("fornecedor")
      .select("*");

    if (error) throw error;

    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("fornecedor")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return { message: "Fornecedor deletado com sucesso." };
  }

  async update(id, data) {
  const { data: updated, error } = await supabase
    .from("fornecedor")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return updated;
}
}

