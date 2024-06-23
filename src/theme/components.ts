import { Components, Theme } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    variants: [
      {
        props: { variant: "outlined", color: "primary" },
        style: {
          color: "#212121",
        },
      },
    ],
    styleOverrides: {
      root: {
        borderRadius: "4px",
        boxShadow: "none",
      },
    },
  },
} as Components<Omit<Theme, "components">>;

export default components;
