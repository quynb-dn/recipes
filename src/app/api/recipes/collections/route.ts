import { COLLECTIONS } from "@_mock/collection";

export async function GET(_: Request) {
  return Response.json({
    data: COLLECTIONS,
  });
}
