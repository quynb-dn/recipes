import { Recipe } from "@models/recipe";
import { generateRandomImageUrl } from "@utils/images";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 800;

export const RECIPES: Recipe[] = [
  {
    id: 1,
    slug: "whole-grain-banana-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "whole-grain-banana-bread"
    ),
    title: "Whole-Grain Banana Bread",
    description: `This one-bowl banana bread - our 2018 Recipe of the Year -- uses the simpest ingredients, but is incredibily moist and flavorful.`,
    content: `This one-bowl banana bread - our 2018 Recipe of the Year -- uses the simpest ingredients, but is incredibily moist and flavorful. While the recipes call for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? no one cal tell, it's that good! And not only is this bread delicious it's versatile.`,
    prep: "10mins",
    bake: "1hr to 1hr 15mins",
    total: "1hr 10mins",
    yield: "1 loaf, 12 generous servings",
  },

  {
    id: 2,
    slug: "classic-banana-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "classic-banana-bread"
    ),
    title: "Classic Banana Bread",
    description:
      "A timeless classic, this banana bread is moist and packed with banana flavor.",
    content:
      "This classic banana bread recipe is easy to make and always turns out perfectly. Great for breakfast or as a snack!",
    prep: "15mins",
    bake: "1hr to 1hr 10mins",
    total: "1hr 25mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 3,
    slug: "pumpkin-spice-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "pumpkin-spice-bread"
    ),
    title: "Pumpkin Spice Bread",
    description: "Deliciously spiced pumpkin bread that's perfect for fall.",
    content:
      "This pumpkin spice bread is moist and full of fall flavors. It's a great treat with a cup of coffee or tea!",
    prep: "20mins",
    bake: "50mins to 1hr",
    total: "1hr 20mins",
    yield: "2 loaves, 16 slices total",
  },
  {
    id: 4,
    slug: "zucchini-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(IMAGE_WIDTH, IMAGE_HEIGHT, "zucchini-bread"),
    title: "Zucchini Bread",
    description: "Moist and flavorful bread made with fresh zucchini.",
    content:
      "This zucchini bread recipe is a great way to use up extra zucchinis from your garden. It's tender, moist, and delicious!",
    prep: "15mins",
    bake: "50mins to 1hr",
    total: "1hr 15mins",
    yield: "2 loaves, 12 slices total",
  },
  {
    id: 5,
    slug: "apple-cinnamon-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "apple-cinnamon-bread"
    ),
    title: "Apple Cinnamon Bread",
    description: "Warm and comforting bread with apple and cinnamon flavors.",
    content:
      "This apple cinnamon bread is perfect for chilly mornings. It's packed with juicy apples and cozy cinnamon spice!",
    prep: "20mins",
    bake: "1hr to 1hr 10mins",
    total: "1hr 30mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 6,
    slug: "lemon-poppy-seed-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "lemon-poppy-seed-bread"
    ),
    title: "Lemon Poppy Seed Bread",
    description:
      "Bright and zesty bread with a delightful crunch of poppy seeds.",
    content:
      "This lemon poppy seed bread is light, refreshing, and bursting with citrus flavor. It's perfect for springtime!",
    prep: "15mins",
    bake: "45mins to 55mins",
    total: "1hr 10mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 7,
    slug: "chocolate-banana-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "chocolate-banana-bread"
    ),
    title: "Chocolate Banana Bread",
    description: "Decadent banana bread with rich chocolate flavor.",
    content:
      "This chocolate banana bread is a chocolate lover's dream. It's moist, chocolatey, and oh-so-delicious!",
    prep: "20mins",
    bake: "1hr to 1hr 10mins",
    total: "1hr 30mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 8,
    slug: "cranberry-orange-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "cranberry-orange-bread"
    ),
    title: "Cranberry Orange Bread",
    description:
      "Tangy and sweet bread bursting with cranberries and orange zest.",
    content:
      "This cranberry orange bread is perfect for holiday mornings. The tart cranberries and citrusy orange zest make a delightful combination!",
    prep: "15mins",
    bake: "50mins to 1hr",
    total: "1hr 15mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 9,
    slug: "blueberry-lemon-bread",
    category: [
      {
        id: 1,
        slug: "bread",
        title: "Bread",
      },
      {
        id: 2,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "blueberry-lemon-bread"
    ),
    title: "Blueberry Lemon Bread",
    description:
      "Bright and fruity bread with juicy blueberries and fresh lemon zest.",
    content:
      "This blueberry lemon bread is a delightful combination of sweet blueberries and tangy lemon. It's perfect for a summer brunch!",
    prep: "15mins",
    bake: "55mins to 1hr 5mins",
    total: "1hr 20mins",
    yield: "1 loaf, 12 slices",
  },
];
