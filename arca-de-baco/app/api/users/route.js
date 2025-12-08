import { ClienteController } from "@/modules/users/controllers/cliente.controller";

const controller = new ClienteController();

export async function POST(request) {
  const body = await request.json();
  return controller.create(body);
}

export async function GET() {
  return controller.list();
}

// export async function DELETE(_, { params }) {
//   return controller.delete(params.id);
// }
export async function DELETE(request) {
  const body = await request.json(); 
  return controller.delete(body.id); 
}

export async function PUT(request) {
  const body = await request.json(); 
  return controller.update(body);
}

// Feito