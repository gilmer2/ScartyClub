import "./Login.css";
import { Button } from "../componets/Button";
import { Input } from "../componets/Input";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <>
          <br />
          <br />
        </>
        <Button
          text="Iniciar sesión"
          onClick={() => {}}
          color="#007BFF"
          type="submit"
        />
        <hr className="my-4"></hr>
        <div className="d-flex flex-column">
          <button className="btn btn-danger btn-user btn-block mb-2">
            <i className="fab fa-google fa-fw"></i> Iniciar sesión con Google
          </button>
          <button className="btn btn-primary btn-user btn-block">
            <i className="fab fa-facebook-f fa-fw"></i> Iniciar sesión con Facebook
          </button>
        </div>
      </div>
    </>
  );
};
