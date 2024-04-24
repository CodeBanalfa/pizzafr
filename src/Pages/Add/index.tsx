import React, { useState } from "react";
import { Box, Button, Card, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./style.css";
import { NavLink } from "react-router-dom";
import AddUserService from "../service/AddUserService";
import CreateAccountService from "../service/AddUserService";
import User from "../../data/security/User";
import Add from "../../data/security/addDate";
interface Props {
  handleCreateAccount: (user: Add) => void;
}

const CreateAccount = ({ handleCreateAccount }: Props) => {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("Le prénom est requis"),
    lastName: yup.string().required("Le nom est requis"),
    username: yup.string().required("Le nom d'utilisateur est requis"),
    password: yup
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est requis"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Les mots de passe doivent correspondre")
      .required("La confirmation du mot de passe est requise"),
    phoneNumber: yup
      .string()
      .matches(
        /^\d+$/,
        "Le numéro de téléphone doit contenir uniquement des chiffres"
      )
      .required("Le numéro de téléphone est requis"),
    address: yup.string().required("L'adresse est requise"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const newAdd = new Add(
        values.username,
        values.firstName,
        values.lastName,
        values.password,
        values.phoneNumber,
        values.address,
        [] // Si vous avez un rôle par défaut, vous pouvez le définir ici
      );

      CreateAccountService.save(newAdd);
      handleCreateAccount(newAdd);
      handleOpen();
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
            left: "10px",
            top: "3%",
            position: "absolute",
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
            padding: "1px",
            marginRight: "1em",
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
            padding: "20px",
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
            right: "25%",
            top: "20%",
            padding: "20px",
          }}
        >
          confirmtion
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
            left: "10px",
            top: "40%",
            padding: "20px",
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
            padding: "15px",
          }}
        >
          Téléphone
        </Typography>
        <TextField
          className="tele"
          style={{
            top: "50px",
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
          <Box
            className="pop"
            sx={{ position: "absolute", top: "50px", left: "70px" }}
          >
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
