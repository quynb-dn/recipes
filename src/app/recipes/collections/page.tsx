import { RECIPES } from "@_mock/recipe";
import { Recipes } from "@components/recipes/Recipes/Recipes";
import { WebLayout } from "@layouts/web";
import { Box } from "@mui/material";
import { WEB_ROUTES } from "@routes/web-routes";
import { ApiService } from "@services/api";

async function fetchRecipes() {
  const res = await ApiService.get("/recipes/collections");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RecipeCategories() {
  const { data: recipes } = await fetchRecipes();

  return (
    <WebLayout
      breadcrumbs={[
        {
          key: "home",
          label: "Home",
          link: WEB_ROUTES.home,
        },
        {
          key: "recipes",
          label: "Recipes",
        },
      ]}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Recipes recipes={recipes} />
      </Box>
    </WebLayout>
  );
}
