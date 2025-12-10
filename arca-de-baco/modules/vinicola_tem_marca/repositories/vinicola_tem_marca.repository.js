import { supabase } from "@/infra/supabase.js";

export class Vinicola_tem_marcaRepository {

  async findById(id) {
    const { data, error } = await supabase
      .from("vinicola_tem_marca")
      .select("*")
      .eq("id", id)
      .single();

    if (error && error.code !== "PGRST116") throw error;
    return data;
  }

  async findRelation(id_vinicola, id_marca) {
    const { data, error } = await supabase
      .from("vinicola_tem_marca")
      .select("*")
      .eq("id_vinicola", id_vinicola)
      .eq("id_marca", id_marca)
      .single();

    if (error && error.code !== "PGRST116") throw error;
    return data;
  }

  async create(data) {
    const { data: relacao, error } = await supabase
      .from("vinicola_tem_marca")
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return relacao;
  }

  async list() {
    const { data, error } = await supabase
      .from("vinicola_tem_marca")
      .select("*");

    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from("vinicola_tem_marca")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return { message: "Relação deletada com sucesso." };
  }

  async update(id, data) {
    const { data: updated, error } = await supabase
      .from("vinicola_tem_marca")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return updated;
  }
}
