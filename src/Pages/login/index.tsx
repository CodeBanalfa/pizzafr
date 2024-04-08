import { Button, Card, TextField, Typography } from "@mui/material";
import "./style.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

interface Props {
  setIsAuthenticated: Function;
}

const Login = ({ setIsAuthenticated }: Props) => {
  const { t } = useTranslation();

  const [error, setError] = useState<boolean>(false);

  const schema = yup.object().shape({
    login: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d{4}$/, "Invalid phone number"),
    password: yup
      .string()
      .required(t("error.required", { field: t("common.passwordPlaceholder") }))
      .test(
        "4Len",
        t("error.minLen", { field: "4" }),
        (value: string) => value.length >= 4
      ),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.login === "0000" && values.password === "titi") {
        // dire à l'application qu'on est connecté
        setIsAuthenticated(true);
      } else {
        // afficher un message d'erreur
        setError(true);
      }
    },
  });

  return (
    <Card className="login" elevation={10} style={{ background: "#3b438b" }}>
      {error && <Typography color="red">{t("common.loginError")}</Typography>}
      <form onSubmit={formik.handleSubmit}>
        <Typography style={{ color: "#fbc02c" }}>identifiant</Typography>
        <TextField
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          name="login"
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          style={{ background: "#FAF7F7" }}
        />
        <Typography style={{ color: "#fbc02c" }}>mot de passe</Typography>
        <TextField
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{ background: "#FAF7F7" }}
        />
        <Link to="/Add" style={{ textDecoration: "none" }}>
          <Button
            size="large"
            style={{
              color: "#fbc02c",
              textDecoration: "underline",
              alignItems: "flex-end",
              marginLeft: "9em",
            }}
          >
            Créer un comptes
          </Button>
        </Link>
        <Button
          variant="contained"
          type="submit"
          style={{ background: "#FFC300" }}
        >
          Connexion
        </Button>
      </form>
    </Card>
  );
};

export default Login;
