import React from "react";
import { Typography, Grid } from "@mui/material";
import { WebLayout } from "@layouts/web";

export default function LearnPage() {
  return (
    <WebLayout>
      <Typography variant="h4" gutterBottom>
        Learn About Food and Nutrition
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Benefits of Organic Food
          </Typography>
          <Typography variant="body1" paragraph>
            Organic foods are grown without synthetic pesticides, fertilizers,
            or GMOs (genetically modified organisms). They are often perceived
            to be healthier and more environmentally friendly.
          </Typography>
          <Typography variant="body1" paragraph>
            Research suggests that organic foods may have higher levels of
            certain nutrients, such as antioxidants. They also promote
            sustainable farming practices.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Understanding Food Labels
          </Typography>
          <Typography variant="body1" paragraph>
            Food labels provide essential information about the nutritional
            content and ingredients of packaged foods. Key components include:
          </Typography>
          <ul>
            <li>Ingredients list</li>
            <li>Nutrition facts panel (calories, fat, carbohydrates, etc.)</li>
            <li>Allergen warnings</li>
            <li>Expiration dates</li>
          </ul>
          <Typography variant="body1" paragraph>
            Learning to read and interpret food labels can help consumers make
            informed choices about their diet and health.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Benefits of a Balanced Diet
          </Typography>
          <Typography variant="body1" paragraph>
            A balanced diet includes a variety of foods in appropriate
            proportions to provide essential nutrients for overall health and
            well-being.
          </Typography>
          <Typography variant="body1" paragraph>
            Benefits of a balanced diet include maintaining a healthy weight,
            reducing the risk of chronic diseases such as heart disease and
            diabetes, and improving mood and energy levels.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Sustainable Food Practices
          </Typography>
          <Typography variant="body1" paragraph>
            Sustainable food practices aim to minimize environmental impact,
            conserve natural resources, and support local economies.
          </Typography>
          <Typography variant="body1" paragraph>
            Examples include:
          </Typography>
          <ul>
            <li>Buying locally grown produce</li>
            <li>Reducing food waste</li>
            <li>Choosing sustainably sourced seafood</li>
            <li>Supporting fair trade products</li>
          </ul>
        </Grid>
      </Grid>
    </WebLayout>
  );
}
