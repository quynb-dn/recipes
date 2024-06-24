import { WebLayout } from "@layouts/web";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { generateRandomImageUrl } from "@utils/images";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: generateRandomImageUrl(1000, 800, "bread"),
    description: "Description for Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: generateRandomImageUrl(1000, 800, "vegetables"),
    description: "Description for Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: generateRandomImageUrl(1000, 800, "snack"),
    description: "Description for Product 3",
  },
];

export default function Shop() {
  return (
    <WebLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3">Shop</Typography>
        </Grid>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">Price: ${product.price}</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </WebLayout>
  );
}
