import React from "react";
import { Typography, Grid } from "@mui/material";
import { WebLayout } from "@layouts/web";

export default function AboutUsPage() {
  return (
    <WebLayout>
      <Typography variant="h4" gutterBottom>
        About Our Food Company
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum facilisis nulla, eget gravida purus viverra eget. Integer
            quis ante nec turpis pharetra lobortis. Proin nec eros at turpis
            egestas mattis non ac ex. Donec consectetur fermentum tellus nec
            lacinia. Ut congue ex nisi, ac tincidunt est molestie ac.
          </Typography>
          <Typography variant="body1" paragraph>
            Vivamus at feugiat ligula. Suspendisse potenti. Nulla porttitor eros
            ut nunc interdum, in ultricies dolor porttitor. Praesent bibendum,
            elit sed dignissim aliquet, ligula ligula fringilla libero, a semper
            eros turpis at nunc. Morbi ac turpis elit. Duis non orci in lectus
            tincidunt congue non non dui.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* You can add an image or more content here */}
          <Typography variant="body1" paragraph>
            Sed eget est in nisi lobortis eleifend at sit amet ligula. Nullam
            faucibus, elit eget tempor dictum, lorem lectus tristique mauris, a
            dignissim orci tellus ut sem. Nullam accumsan purus ut magna
            pharetra, id vestibulum ipsum efficitur. Duis tincidunt mauris
            lacus, eu ultricies enim finibus vel.
          </Typography>
        </Grid>
      </Grid>
    </WebLayout>
  );
}
