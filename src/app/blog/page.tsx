import React from "react";

import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

import { ApiService } from "@services/api";
import { BlogPost } from "@models/blog";

import { WebLayout } from "@layouts/web";

async function fetchBlogPosts(): Promise<{ data: BlogPost[] }> {
  try {
    const res = await ApiService.get("/blogs");
    if (!res.ok) {
      return {
        data: [],
      };
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return {
      data: [],
    };
  }
}
export default async function BlogPage() {
  const { data: blogPosts } = await fetchBlogPosts();

  return (
    <WebLayout>
      <Typography variant="h4" gutterBottom>
        Latest Blog Posts
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
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
