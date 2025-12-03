import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const test = async () => {
  console.log("URL:", process.env.SUPABASE_URL);
  console.log("SERVICE:", process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .limit(1);

  console.log("RESULTADO:");
  console.log({ data, error });
};

test();
