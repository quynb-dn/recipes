import { RECIPES } from "@_mock/recipe";

export async function GET(request: Request) {
  return Response.json({
    data: RECIPES,
  });
}
