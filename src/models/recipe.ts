export type RecipeCategory = {
  id: number;
  slug: string;
  title: string;
};

export type Recipe = {
  id: number;
  slug: string;
  category: RecipeCategory[];
  image: string;
  title: string;
  description: string;
  content: string;
  prep: string;
  bake: string;
  total: string;
  yield: string;
};
