import dotenv from "dotenv";
dotenv.config();

import { supabase } from "../../infra/supabase.js";

console.log(">>");

if (!process.env.SUPABASE_URL)
  console.error("❌ SUPABASE_URL não encontrada");

if (!process.env.SUPABASE_SERVICE_ROLE_KEY)
  console.error("❌ SUPABASE_SERVICE_ROLE_KEY não encontrada");

async function test() {
  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .limit(1);

  if (error) {
    console.log("❌ Erro Supabase:", error);
  } else {
    console.log("✅ Conectado ao Supabase!", data);
  }
}

test();
