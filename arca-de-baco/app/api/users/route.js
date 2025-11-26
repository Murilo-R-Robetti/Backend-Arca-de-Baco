import { ClienteController } from "@/modules/users/controllers/cliente.controller";

const controller = new ClienteController();

export async function POST(request) {
  const body = await request.json();
  return controller.create(body);
}
