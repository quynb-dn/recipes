import { notFound } from "next/navigation";

import { RECIPES } from "@_mock/recipe";
import { WEB_ROUTES } from "@routes/web-routes";
import { ApiService } from "@services/api";

import { WebLayout } from "@layouts/web";
import { RecipeDetails } from "@components/recipes/RecipeDetails/RecipeDetails";

async function fetchCollection(slug: string) {
  const res = await ApiService.get(`/recipes/collections/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface RecipeCategoryDetailsProps {
  params: { slug: string };
}

export default async function RecipeCategoryDetails({
  params: { slug },
}: RecipeCategoryDetailsProps) {
  const { data: collection } = await fetchCollection(slug);

  if (!collection) {
    return notFound();
  }

  return (
    <WebLayout
      breadcrumbs={[
        {
          key: "recipes",
          label: "Recipes",
          link: WEB_ROUTES.recipes,
        },
        {
          key: "categories",
          label: "Categories",
          link: WEB_ROUTES.recipeCategories,
        },
        {
          key: collection.slug,
          label: "",
        },
      ]}
    >
      <RecipeDetails recipe={collection} />
    </WebLayout>
  );
}
