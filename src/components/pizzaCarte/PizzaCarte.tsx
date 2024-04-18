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
      updateTotalPrice(pizza.price);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
      updateTotalPrice(-pizza.price);
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
      <CardContent sx={{ flex: 1 }} className="carte">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: "cursive" }}
        >
          {pizza.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontFamily: "cursive" }}
        >
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
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <Chip
              className="chip"
              style={{
                backgroundColor: "green",
                color: "white",
                fontFamily: "cursive",
                fontSize: "20px",
                width: "100px",
              }}
              label={`${pizza.price}€`}
              size="medium"
            />
          </Typography>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              Quantité
            </Typography>
            <Button
              size="small"
              onClick={handleDecrement}
              style={{ fontFamily: "cursive", fontSize: "40px" }}
            >
              -
            </Button>
            <Typography variant="body2" color="text.secondary">
              {quantity}
            </Typography>
            <Button
              size="small"
              onClick={handleIncrement}
              style={{ fontFamily: "cursive", fontSize: "40px" }}
            >
              +
            </Button>
          </CardActions>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default PizzaCarte;
