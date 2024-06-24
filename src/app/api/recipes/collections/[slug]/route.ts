import { COLLECTIONS } from "@_mock/collection";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const recipe = COLLECTIONS.find((recipe) => recipe.slug === params.slug);

  return Response.json({
    data: recipe ?? null,
  });
}
