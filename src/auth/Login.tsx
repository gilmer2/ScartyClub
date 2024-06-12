import { useState } from "react";
import "./Login.css";
import { Button } from "../componets/Button";
import { Input } from "../componets/Input";

export const Login = () => {
  return (
    <>
    <br />
    <br />
      <div className="login-form">
        <h1>Login</h1>
        <Input type="correo" placeholder="Correo electronico" />
        <Input type="password" placeholder="Contraseña" />
        
        <Button text="Iniciar sesión" onClick={() => {}} color="#007BFF" />
      </div>
    </>
  );
};
