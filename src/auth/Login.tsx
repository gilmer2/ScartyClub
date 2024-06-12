import { useState } from "react";
import "./Login.css";
import { Button } from "../componets/Button";
import { Input } from "../componets/Input";
import { Link } from "react-router-dom";
import { Paths } from "../path/paths";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  return (
    <>
      <br />
      <br />
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        <Input type="correo" placeholder="Correo electronico" />
        <Input type="password" placeholder="Contraseña" />
        <Link className="form-text text-muted text-decoration-none" to="">
          ¿Has olvidado tu contraseña?
        </Link>
        <Button
          text="Iniciar sesión"
          onClick={() => {}}
          color="#007BFF"
          type="submit"
        />
      </div>
    </>
  );
};
