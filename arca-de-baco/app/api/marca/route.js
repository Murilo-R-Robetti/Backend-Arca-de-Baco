import { MarcaController } from "@/modules/marca/controllers/marca.controller";
const controller = new MarcaController();

export async function GET() {
  return controller.list();
}

export async function POST(request) {
  const body = await request.json();
  return controller.create(body);
}

export async function DELETE(request) {
  const { id } = await request.json();
  return controller.delete(id);
}

export async function PUT(request) {
  const body = await request.json();
  return controller.update(body);
}
