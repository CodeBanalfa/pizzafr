import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Pizza from "../../data/DataType";
import "./style.css";

interface CProps {
  pizza: Pizza;
  handleQuantityChange: (quantity: number) => void;
}

const PizzaCarte = ({ pizza, handleQuantityChange }: CProps) => {
  const [quantity, setQuantity] = useState<number>(1); // Initialisé à 1 pour respecter le minimum requis

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
            <Chip
              className="chip"
              style={{ backgroundColor: "green", color: "white" }}
              label={`${pizza.price}€`}
              size="medium"
            />
          </Typography>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              Quantité
            </Typography>
            <Button size="small" onClick={handleDecrement}>
              -
            </Button>
            <TextField
              type="number"
              variant="outlined"
              size="small"
              value={quantity}
              InputProps={{ inputProps: { min: 1, max: 10 } }} // Plage de 1 à 10
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
                setQuantity(newQuantity);
                handleQuantityChange(newQuantity);
              }}
            />
            <Button size="small" onClick={handleIncrement}>
              +
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default PizzaCarte;
