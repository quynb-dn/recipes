import { Recipe } from "@models/recipe";
import { generateRandomImageUrl } from "@utils/images";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 800;

export const RESOURCES: Recipe[] = [
  {
    id: 19,
    slug: "cinnamon-raisin-bread",
    category: [
      {
        id: 12,
        slug: "spice-bread",
        title: "Spice Bread",
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
      "cinnamon-raisin-bread"
    ),
    title: "Cinnamon Raisin Bread",
    description:
      "Sweet and aromatic bread filled with plump raisins and cinnamon swirls.",
    content:
      "This cinnamon raisin bread is perfect for breakfast or toasted with butter. The cinnamon swirls and plump raisins add delicious flavor.",
    prep: "20mins",
    bake: "1hr to 1hr 10mins",
    total: "1hr 30mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 20,
    slug: "sesame-seed-bread",
    category: [
      {
        id: 13,
        slug: "seed-bread",
        title: "Seed Bread",
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
      "sesame-seed-bread"
    ),
    title: "Sesame Seed Bread",
    description: "Nutty and flavorful bread topped with crunchy sesame seeds.",
    content:
      "This sesame seed bread is great for sandwiches or as a side. The crunchy sesame seeds add a delightful texture and flavor.",
    prep: "15mins",
    bake: "50mins to 1hr",
    total: "1hr 15mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 21,
    slug: "buttermilk-biscuits",
    category: [
      {
        id: 14,
        slug: "biscuits",
        title: "Biscuits",
      },
      {
        id: 3,
        slug: "quick-bread",
        title: "Quick Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "buttermilk-biscuits"
    ),
    title: "Buttermilk Biscuits",
    description: "Flaky and buttery biscuits made with tangy buttermilk.",
    content:
      "These buttermilk biscuits are perfect for breakfast or as a side to soups and stews. They're flaky, buttery, and delicious!",
    prep: "15mins",
    bake: "12mins to 15mins",
    total: "30mins",
    yield: "12 biscuits",
  },
  {
    id: 22,
    slug: "irish-soda-bread",
    category: [
      {
        id: 15,
        slug: "soda-bread",
        title: "Soda Bread",
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
      "irish-soda-bread"
    ),
    title: "Irish Soda Bread",
    description: "Traditional Irish bread made with baking soda for leavening.",
    content:
      "This Irish soda bread is perfect with soups or as a side. It has a unique texture and flavor from the baking soda.",
    prep: "15mins",
    bake: "45mins to 55mins",
    total: "1hr 10mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 23,
    slug: "garlic-herb-focaccia",
    category: [
      {
        id: 16,
        slug: "flatbread",
        title: "Flatbread",
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
      "garlic-herb-focaccia"
    ),
    title: "Garlic Herb Focaccia",
    description: "Italian flatbread infused with garlic and aromatic herbs.",
    content:
      "This garlic herb focaccia is great as an appetizer or alongside pasta dishes. The garlic and herbs give it a delicious Mediterranean flavor.",
    prep: "20mins",
    bake: "20mins to 25mins",
    total: "45mins",
    yield: "1 focaccia, 8 slices",
  },
  {
    id: 24,
    slug: "maple-pecan-bread",
    category: [
      {
        id: 17,
        slug: "nut-bread",
        title: "Nut Bread",
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
      "maple-pecan-bread"
    ),
    title: "Maple Pecan Bread",
    description: "Sweet bread with maple syrup and crunchy pecans.",
    content:
      "This maple pecan bread is perfect for brunch or dessert. The maple syrup adds sweetness while the pecans provide a delightful crunch.",
    prep: "15mins",
    bake: "50mins to 1hr",
    total: "1hr 15mins",
    yield: "1 loaf, 10 slices",
  },
  {
    id: 25,
    slug: "carrot-zucchini-muffins",
    category: [
      {
        id: 18,
        slug: "muffins",
        title: "Muffins",
      },
      {
        id: 4,
        slug: "vegetable-bread",
        title: "Vegetable Bread",
      },
    ],
    image: generateRandomImageUrl(
      IMAGE_WIDTH,
      IMAGE_HEIGHT,
      "carrot-zucchini-muffins"
    ),
    title: "Carrot Zucchini Muffins",
    description:
      "Healthy muffins packed with carrots, zucchini, and a hint of spice.",
    content:
      "These carrot zucchini muffins are great for a quick breakfast or snack. They're moist, flavorful, and full of veggies!",
    prep: "15mins",
    bake: "20mins to 25mins",
    total: "40mins",
    yield: "12 muffins",
  },
  {
    id: 26,
    slug: "challah-bread",
    category: [
      {
        id: 19,
        slug: "braided-bread",
        title: "Braided Bread",
      },
      {
        id: 1,
        slug: "yeast-bread",
        title: "Yeast Bread",
      },
    ],
    image: generateRandomImageUrl(IMAGE_WIDTH, IMAGE_HEIGHT, "challah-bread"),
    title: "Challah Bread",
    description:
      "Soft and slightly sweet braided bread traditionally eaten on Jewish Sabbath and holidays.",
    content:
      "This challah bread is perfect for special occasions. The braided shape and slightly sweet flavor make it unique and delicious.",
    prep: "30mins",
    bake: "30mins to 35mins",
    total: "1hr 5mins",
    yield: "1 loaf, 12 slices",
  },
  {
    id: 27,
    slug: "pita-bread",
    category: [
      {
        id: 20,
        slug: "flatbread",
        title: "Flatbread",
      },
      {
        id: 1,
        slug: "yeast-bread",
        title: "Yeast Bread",
      },
    ],
    image: generateRandomImageUrl(IMAGE_WIDTH, IMAGE_HEIGHT, "pita-bread"),
    title: "Pita Bread",
    description:
      "Soft and fluffy Middle Eastern bread perfect for stuffing with fillings or dipping into hummus.",
    content:
      "This pita bread is great for making sandwiches or enjoying with dips. It's soft, fluffy, and delicious!",
    prep: "20mins",
    bake: "5mins to 7mins",
    total: "25mins",
    yield: "8 pitas",
  },
];
