import React, { useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./style.css";

interface Props {
  handleCreateAccount: Function;
}

const CreateAccount = ({ handleCreateAccount }: Props) => {
  const [error, setError] = useState<boolean>(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Invalid phone number"),
    address: yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // Handle form submission, e.g., send data to backend
      handleCreateAccount(values);
    },
  });

  return (
    <Card
      className="create-account"
      elevation={10}
      style={{ background: "#3b438b" }}
    >
      {error && (
        <Typography color="error">Error: Failed to create account</Typography>
      )}
      <form onSubmit={formik.handleSubmit} className="form">
        <Typography style={{ color: "#fbc02c" }}>nom</Typography>
        <TextField
          className="inputD"
          fullWidth
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <Typography style={{ color: "#fbc02c" }}>prénom</Typography>
        <TextField
          className="inputD"
          fullWidth
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />

        <Typography style={{ color: "#fbc02c" }}>Mot de passe</Typography>
        <TextField
          className="inputE"
          fullWidth
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Typography style={{ color: "#fbc02c" }}>confirm</Typography>
        <TextField
          className="inputE"
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
        />

        <Typography style={{ color: "#fbc02c" }}>address</Typography>

        <TextField
          className="inputDA"
          fullWidth
          id="address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          style={{ width: "100%", height: "70%", flexFlow: "row wrap" }}
        />

        <Typography style={{ color: "#fbc02c" }}>Téléphone</Typography>
        <TextField
          className="inputD"
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
          }}
        >
          Créer
        </Button>
      </form>
    </Card>
  );
};

export default CreateAccount;
