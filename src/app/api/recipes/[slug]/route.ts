import { RECIPES } from "@_mock/recipe";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const recipe = RECIPES.find((recipe) => recipe.slug === params.slug);

  return Response.json({
    data: recipe ?? null,
  });
}
