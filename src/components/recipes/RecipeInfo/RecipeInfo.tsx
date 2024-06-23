"use client";

import { Stack, Typography, styled } from "@mui/material";
import { ElementType } from "react";

const Description = styled(Typography)({
  fontSize: "1.1rem",
  fontWeight: "bold",
});

interface RecipeInfoProps {
  Icon?: ElementType;
  title: string;
  description?: string;
}

export const RecipeInfo = ({ Icon, title, description }: RecipeInfoProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {Icon && <Icon sx={{ width: 50, height: 50 }} />}
      <Stack>
        <Typography variant="h6">{title}</Typography>
        {description && <Description>{description}</Description>}
      </Stack>
    </Stack>
  );
};
