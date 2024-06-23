"use client";

import { WEB_ROUTES } from "@routes/web-routes";

import { NavItem } from "./Navigation/types";

export const navItems: NavItem[] = [
  {
    id: "shop",
    path: WEB_ROUTES.shop,
    label: "Shop",
  },
  {
    id: "recipes",
    path: WEB_ROUTES.recipes,
    label: "Recipes",
    children: [
      {
        id: "shop-categories",
        path: WEB_ROUTES.recipeCategories,
        label: "Categories",
      },
      {
        id: "shop-collections",
        path: WEB_ROUTES.recipeCollections,
        label: "Collections",
      },
      {
        id: "shop-resources",
        path: WEB_ROUTES.recipeResources,
        label: "Resources",
      },
    ],
  },
  {
    id: "learn",
    path: WEB_ROUTES.learn,
    label: "Learn",
  },
  {
    id: "about",
    path: WEB_ROUTES.about,
    label: "About",
  },
  {
    id: "blog",
    path: WEB_ROUTES.blog,
    label: "Blog",
  },
];
