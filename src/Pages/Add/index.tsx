import React, { useState } from "react";
import { Box, Button, Card, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./style.css";
import { NavLink } from "react-router-dom";
import AddUserService from "../service/AddUserService";

interface Props {
  handleCreateAccount: Function;
}

const CreateAccount = ({ handleCreateAccount }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    password: yup.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only digits"),
    address: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      username: 0,
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      phoneNumber: 0, // Modifier phoneNumber pour qu'il soit une chaîne de caractères
      address: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      handleCreateAccount(values);
      try {
        await AddUserService.savUser(
          values.username,
          values.password,
          values.firstName,
          values.lastName,
          values.address
        );
      } catch (error) {
        console.error("Error while saving user:", error);
        setError(true); // Définir l'erreur à true en cas d'échec
      }
    },
  });

  return (
    <Card
      className="create-account"
      elevation={10}
      style={{ background: "#3b438b" }}
      sx={{ margin: "auto", marginTop: "-10em", maxWidth: "50em" }}
    >
      {error && (
        <Typography color="error">Error: Failed to create account</Typography>
      )}
      <form onSubmit={formik.handleSubmit} className="form">
        <Typography
          style={{
            color: "#fbc02c",
            right: "0%",
            top: "0px",
            marginRight: "1em",
          }}
        >
          nom
        </Typography>

        <TextField
          className="nom"
          fullWidth
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          style={{
            color: "#fbc02c",
            right: "80%",
            top: "0px",
          }}
        />
        <Typography
          style={{
            color: "#fbc02c",
            position: "absolute",
            right: "30%",
            top: "20px",
            padding: "9px",
          }}
        >
          prénom
        </Typography>
        <TextField
          className="prnom"
          fullWidth
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          style={{
            color: "#fbc02c",
            left: "80%",
            top: "-50px",
          }}
        />

        <Typography
          style={{
            color: "#fbc02c",
            position: "absolute",
            left: "10px",
            top: "20%",
          }}
        >
          Mot de passe
        </Typography>
        <TextField
          className="Mdp"
          fullWidth
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{
            color: "#fbc02c",
            right: "80%",
            top: "0px",
          }}
        />
        <Typography
          style={{
            color: "#fbc02c",
            position: "absolute",
            right: "30%",
            top: "20%",
            padding: "9px",
          }}
        >
          confirm
        </Typography>
        <TextField
          className="Cmdp"
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          style={{
            color: "#fbc02c",
            left: "80%",
            top: "-50px",
          }}
        />

        <Typography
          style={{
            color: "#fbc02c",
            position: "absolute",
            left: "20px",
            top: "40%",
          }}
        >
          address
        </Typography>

        <TextField
          className="addres"
          fullWidth
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          style={{
            width: "100%",
            height: "150px",
            flexFlow: "row wrap",
            right: "80%",
          }}
        />

        <Typography
          style={{
            color: "#fbc02c",
            position: "absolute",
            left: "10px",
            top: "75%",
          }}
        >
          Téléphone
        </Typography>
        <TextField
          className="tele"
          style={{
            top: "30px",
            right: "245px",
            display: "flex",
            flexFlow: "row wrap",
          }}
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          className="submit-button"
          style={{
            background: "#fbc02c",
            width: "30px",
            color: "black",
            alignItems: "flex-end",
            left: "90%",
          }}
          onClick={handleOpen}
        >
          Créer
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
        >
          <Box className="pop">
            <h2 id="parent-modal-title">Félicitation!</h2>
            <p id="parent-modal-description">Vous étes préts à commander.</p>

            <NavLink to="/PizzaG" style={{ color: "#fbc02c" }}>
              Passez votre première commande
            </NavLink>
          </Box>
        </Modal>
      </form>
    </Card>
  );
};

export default CreateAccount;
