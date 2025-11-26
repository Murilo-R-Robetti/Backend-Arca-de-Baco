import { supabase } from "@/infra/supabase.js";

export class ClienteRepository {
  async findByEmail(email) {
    const { data, error } = await supabase
      .from("clientes")
      .select("*")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    return data;
  }

  async create(data) {
    const { data: cliente, error } = await supabase
      .from("clientes")
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return cliente;
  }
}
