import { Recipes } from "@components/recipes/Recipes/Recipes";
import { WebLayout } from "@layouts/web";
import { Box } from "@mui/material";
import { WEB_ROUTES } from "@routes/web-routes";
import { ApiService } from "@services/api";

async function fetchResources() {
  try {
    const res = await ApiService.get("/recipes/resources");
    if (!res.ok) {
      return {
        data: [],
      };
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return {
      data: [],
    };
  }
}

export default async function RecipeCategories() {
  const { data: resources } = await fetchResources();

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
        <Recipes recipes={resources} />
      </Box>
    </WebLayout>
  );
}
