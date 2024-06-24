import { RESOURCES } from "@_mock/resources";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const recipe = RESOURCES.find((recipe) => recipe.slug === params.slug);

  return Response.json({
    data: recipe ?? null,
  });
}
