import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import Pizza from "../../data/DataType";
import "./style.css";

interface CPropse {
  pizza: Pizza;
}
const PizzaCarte = ({ pizza }: CPropse) => {
  return (
    <>
      <Card
        className="Carte"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          alt="Pizza image"
          image={pizza.image}
          sx={{ width: 140, height: 140, marginRight: 2 }}
        />
        <CardContent sx={{ flex: 1, width: "100%" }}>
          <Typography gutterBottom variant="h5" component="div">
            {pizza.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pizza.description}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <Chip color="primary" label={`${pizza.price}€`} size="small" />
            
          </Typography>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              quantité
            </Typography>
            <Button size="small">-</Button>

            <Button size="small">+</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default PizzaCarte;
