"use client";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import typography from "./typography";
import components from "./components";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ac3c41",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography,
  components,
});
