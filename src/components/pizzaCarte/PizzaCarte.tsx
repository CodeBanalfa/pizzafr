import React, { useState } from "react";
import Pizza from "../../data/DataType";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import "./style.css";

interface CProps {
  pizza: Pizza;
  updateTotalPrice: (price: number) => void;
  updateQuantity: (quantity: number) => void;
}

const PizzaCarte = ({ pizza, updateTotalPrice, updateQuantity }: CProps) => {
  const [quantity, setQuantity] = useState(pizza.quantity || 0);

  const handleIncrement = () => {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
      updateTotalPrice(pizza.price); // Corrigez l'appel avec le bon prix
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
      updateTotalPrice(-pizza.price); // Utilisez le prix négatif pour le décrément
    }
  };

  return (
    <Card className="Carte">
      <CardMedia
        component="img"
        alt="Pizza image"
        image={`/assets/${pizza.image}`}
        sx={{ width: 140, height: 140, marginRight: 2 }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" style={{ fontFamily: "cursive" }}>
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
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          <Chip className="chip" label={`${pizza.price}€`} size="medium" />
        </Typography>
        <CardActions>
          <Typography variant="body2" color="text.secondary">
            Quantité
          </Typography>
          <Button size="small" onClick={handleDecrement}>
            -
          </Button>
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
          <Button size="small" onClick={handleIncrement}>
            +
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PizzaCarte;
