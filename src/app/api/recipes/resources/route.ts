import { RESOURCES } from "@_mock/resources";

export async function GET(_: Request) {
  return Response.json({
    data: RESOURCES,
  });
}
