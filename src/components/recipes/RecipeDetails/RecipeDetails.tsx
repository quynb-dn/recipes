"use client";

import NextImage from "next/image";

import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

import { generateRandomImageUrl } from "@utils/images";
import { Recipe } from "@models/recipe";

import { RecipeInfo } from "@components/recipes/RecipeInfo/RecipeInfo";

const RecipeImage = styled(NextImage)({
  width: "100%",
  maxWidth: 800,
  height: "auto",
});

interface RecipeDetailsProps {
  recipe: Recipe;
}

export const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 10,
      }}
      sx={{ mt: 6 }}
    >
      <Grid
        item
        xs={12}
        md={5}
        lg={5}
        sx={{
          order: {
            xs: 2,
            sm: 1,
          },
        }}
      >
        <Stack spacing={4}>
          <Stack
            spacing={{
              xs: 2,
              sm: 14,
            }}
          >
            <Typography
              variant="h2"
              fontWeight="500"
              fontSize={{
                xs: "2rem",
              }}
            >
              {recipe.title}
            </Typography>
            <Typography>{recipe.content}</Typography>
          </Stack>
          <Stack divider={<Divider />} spacing={2}>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              alignItems={{
                xs: "flex-start",
                sm: "center",
              }}
              spacing={4}
            >
              <RecipeInfo
                Icon={AccessTimeIcon}
                title="Prep"
                description={recipe.prep}
              />
              <RecipeInfo title="Bake" description={recipe.bake} />
              <RecipeInfo title="Total" description={recipe.total} />
            </Stack>
            <Stack
              spacing={2}
              justifyContent="space-between"
              direction={{
                xs: "column",
                sm: "row",
              }}
              alignItems={{
                xs: "flex-start",
                sm: "center",
              }}
            >
              <RecipeInfo
                Icon={CookieOutlinedIcon}
                title="Yield"
                description={recipe.yield}
              />
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                width="100%"
                maxWidth={246}
              >
                <Button
                  startIcon={<AddIcon />}
                  variant="outlined"
                  sx={{ textTransform: "uppercase" }}
                >
                  Save recipe
                </Button>
                <Button
                  startIcon={<LocalPrintshopOutlinedIcon />}
                  variant="outlined"
                  sx={{ textTransform: "uppercase" }}
                >
                  Print
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        lg={7}
        sx={{
          order: {
            xs: 1,
            sm: 2,
          },
        }}
      >
        <RecipeImage
          src={generateRandomImageUrl(600, 400, "foods")}
          width={600}
          height={400}
          alt=""
        />
      </Grid>
    </Grid>
  );
};
