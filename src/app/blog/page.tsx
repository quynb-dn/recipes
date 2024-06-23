import React from "react";
import NextLink from "next/link";

import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { WebLayout } from "@layouts/web";
import { getRandomImageUrl } from "@utils/images";

const blogPosts = [
  {
    id: 1,
    title: "Delicious Summer Recipes",
    image: getRandomImageUrl(600, 400, "food-summer"),
    excerpt:
      "Discover refreshing summer recipes that will delight your taste buds and keep you cool.",
    slug: "delicious-summer-recipes",
  },
  {
    id: 2,
    title: "Healthy Eating Tips for Busy Professionals",
    image: getRandomImageUrl(600, 400, "food-healthy"),
    excerpt:
      "Learn how to maintain a healthy diet despite a hectic work schedule with these practical tips.",
    slug: "healthy-eating-tips-for-busy-professionals",
  },
  {
    id: 3,
    title: "Farm-to-Table Dining: A Sustainable Choice",
    image: getRandomImageUrl(600, 400, "food-dining"),
    excerpt:
      "Explore the benefits of farm-to-table dining and its positive impact on health and the environment.",
    slug: "farm-to-table-dining-sustainable-choice",
  },
];

export default function BlogPage() {
  return (
    <WebLayout>
      <Typography variant="h4" gutterBottom>
        Latest Blog Posts
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={NextLink} href={`/blog/${post.slug}`}>
                <CardMedia
                  image={post.image}
                  title={post.title}
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </WebLayout>
  );
}
