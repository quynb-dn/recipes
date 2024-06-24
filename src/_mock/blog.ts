import { BlogPost } from "@models/blog";
import { generateRandomImageUrl } from "@utils/images";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Delicious Summer Recipes",
    image: generateRandomImageUrl(600, 400, "food-summer"),
    excerpt:
      "Discover refreshing summer recipes that will delight your taste buds and keep you cool.",
    slug: "delicious-summer-recipes",
  },
  {
    id: 2,
    title: "Healthy Eating Tips for Busy Professionals",
    image: generateRandomImageUrl(600, 400, "food-healthy"),
    excerpt:
      "Learn how to maintain a healthy diet despite a hectic work schedule with these practical tips.",
    slug: "healthy-eating-tips-for-busy-professionals",
  },
  {
    id: 3,
    title: "Farm-to-Table Dining: A Sustainable Choice",
    image: generateRandomImageUrl(600, 400, "food-dining"),
    excerpt:
      "Explore the benefits of farm-to-table dining and its positive impact on health and the environment.",
    slug: "farm-to-table-dining-sustainable-choice",
  },
];
