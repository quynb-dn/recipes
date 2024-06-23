import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { WebLayout } from "@layouts/web";

export default function LandingPage() {
  return (
    <WebLayout>
      <Box>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Delicious Eats
          </Typography>
          <Typography variant="h5" paragraph>
            Discover the finest flavors from around the world, crafted with love
            and care.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Explore Our Menu
          </Button>
        </Container>
      </Box>

      {/* Features section */}
      <Container
        maxWidth="lg"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image="https://via.placeholder.com/250"
                  title="Feature 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Highlight a key feature or product. Describe its benefits or
                    unique qualities.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image="https://via.placeholder.com/250"
                  title="Feature 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`Another key feature or product. Explain why it's essential
                    or desirable.`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image="https://via.placeholder.com/250"
                  title="Feature 3"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Feature 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Highlight another key aspect of your business or offering.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#f8f9fa", padding: "4rem 0" }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Ready to Experience Great Food?
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Order Now
          </Button>
        </Container>
      </Box>
    </WebLayout>
  );
}
