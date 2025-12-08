import { SommelierController } from "@/modules/sommelier/controllers/sommelier.controller";

const controller = new SommelierController();

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

// Feito