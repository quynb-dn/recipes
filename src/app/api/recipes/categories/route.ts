import { RECIPES } from "@_mock/recipe";

export async function GET(_: Request) {
  return Response.json({
    data: RECIPES,
  });
}
