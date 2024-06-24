import { Recipe } from "@models/recipe";
import { generateRandomImageUrl } from "@utils/images";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 800;

export const COLLECTIONS: Recipe[] = [
  {
    id: 10,
    slug: "rosemary-olive-oil-bread",
    category: [
      {
        id: 3,
        slug: "herb-bread",
        title: "Herb Bread",
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
      "rosemary-olive-oil-bread"
    ),
    title: "Rosemary Olive Oil Bread",
    description:
      "A savory bread infused with fragrant rosemary and rich olive oil.",
    content:
      "This rosemary olive oil bread is perfect as a side for soups or salads. The combination of herbs and olive oil creates a flavorful loaf.",
    prep: "15mins",
    bake: "55mins to 1hr 5mins",
    total: "1hr 20mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 11,
    slug: "cheddar-bacon-bread",
    category: [
      {
        id: 4,
        slug: "cheese-bread",
        title: "Cheese Bread",
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
      "cheddar-bacon-bread"
    ),
    title: "Cheddar Bacon Bread",
    description:
      "Savory bread loaded with sharp cheddar cheese and crispy bacon.",
    content:
      "This cheddar bacon bread is a crowd-pleaser. Perfect for breakfast or as a snack!",
    prep: "20mins",
    bake: "1hr to 1hr 10mins",
    total: "1hr 30mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 12,
    slug: "sun-dried-tomato-bread",
    category: [
      {
        id: 5,
        slug: "savory-bread",
        title: "Savory Bread",
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
      "sun-dried-tomato-bread"
    ),
    title: "Sun-Dried Tomato Bread",
    description: "Flavorful bread with intense sun-dried tomatoes and herbs.",
    content:
      "This sun-dried tomato bread is perfect for sandwiches or enjoyed on its own. The sun-dried tomatoes add a burst of flavor to every bite.",
    prep: "15mins",
    bake: "50mins to 1hr",
    total: "1hr 15mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 13,
    slug: "honey-wheat-bread",
    category: [
      {
        id: 6,
        slug: "whole-grain-bread",
        title: "Whole Grain Bread",
      },
      {
        id: 1,
        slug: "yeast-bread",
        title: "Yeast Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "honey-wheat-bread"
    ),
    title: "Honey Wheat Bread",
    description:
      "Naturally sweetened bread with the goodness of whole wheat and honey.",
    content:
      "This honey wheat bread is wholesome and delicious. Great for sandwiches or toasts!",
    prep: "20mins",
    bake: "1hr to 1hr 10mins",
    total: "1hr 30mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 14,
    slug: "fig-walnut-bread",
    category: [
      {
        id: 7,
        slug: "fruit-nut-bread",
        title: "Fruit & Nut Bread",
      },
      {
        id: 1,
        slug: "yeast-bread",
        title: "Yeast Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "fig-walnut-bread"
    ),
    title: "Fig Walnut Bread",
    description: "Rich bread with sweet figs and crunchy walnuts.",
    content:
      "This fig walnut bread is perfect for breakfast or as a dessert. The combination of figs and walnuts adds a delightful texture and flavor.",
    prep: "15mins",
    bake: "50mins to 1hr",
    total: "1hr 15mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 15,
    slug: "spinach-feta-bread",
    category: [
      {
        id: 8,
        slug: "vegetable-bread",
        title: "Vegetable Bread",
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
      "spinach-feta-bread"
    ),
    title: "Spinach Feta Bread",
    description: "Savory bread with nutritious spinach and tangy feta cheese.",
    content:
      "This spinach feta bread is packed with flavor and makes a great addition to any meal. The spinach and feta complement each other perfectly.",
    prep: "20mins",
    bake: "55mins to 1hr 5mins",
    total: "1hr 25mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 16,
    slug: "banana-nutella-swirl-bread",
    category: [
      {
        id: 9,
        slug: "sweet-bread",
        title: "Sweet Bread",
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
      "banana-nutella-swirl-bread"
    ),
    title: "Banana Nutella Swirl Bread",
    description:
      "Indulgent bread with swirls of banana and Nutella throughout.",
    content:
      "This banana Nutella swirl bread is a decadent treat. Perfect for dessert or a special brunch!",
    prep: "15mins",
    bake: "55mins to 1hr 5mins",
    total: "1hr 20mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 17,
    slug: "jalapeno-cheddar-cornbread",
    category: [
      {
        id: 10,
        slug: "cornbread",
        title: "Cornbread",
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
      "jalapeno-cheddar-cornbread"
    ),
    title: "Jalapeno Cheddar Cornbread",
    description: "Spicy and cheesy cornbread with a kick of jalapeno.",
    content:
      "This jalapeno cheddar cornbread is perfect alongside chili or soups. The spicy jalapenos and sharp cheddar cheese create a flavorful combination.",
    prep: "15mins",
    bake: "45mins to 55mins",
    total: "1hr 10mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 18,
    slug: "orange-cranberry-bread",
    category: [
      {
        id: 11,
        slug: "citrus-bread",
        title: "Citrus Bread",
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
      "orange-cranberry-bread"
    ),
    title: "Orange Cranberry Bread",
    description:
      "Bright and tangy bread with zesty orange and tart cranberries.",
    content:
      "This orange cranberry bread is bursting with citrus flavor and juicy cranberries. It's a delightful treat any time of day!",
    prep: "20mins",
    bake: "50mins to 1hr",
    total: "1hr 20mins",
    yield: "1 loaf, 10 slices",
  },
];
