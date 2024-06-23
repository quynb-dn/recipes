import NextLink from "next/link";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { Recipe } from "@models/recipes";
import { WEB_ROUTES } from "@routes/web-routes";

interface RecipesProps {
  recipes: Recipe[];
}

export const Recipes = ({ recipes }: RecipesProps) => {
  const hasRecipes = Boolean(recipes.length);
  return (
    hasRecipes && (
      <Grid container spacing={6} alignItems="stretch">
        {recipes.map((recipe) => (
          <Grid key={recipe.id} item xs={12} sm={6} md={6} lg={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={recipe.image}
                title={recipe.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.content}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button
                  variant="outlined"
                  size="small"
                  LinkComponent={NextLink}
                  href={`${WEB_ROUTES.recipeCategories}/${recipe.slug}`}
                >
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    )
  );
};
