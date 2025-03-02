import "./Login.css";
import { Button } from "../componets/Button";
import { Input } from "../componets/Input";
import "bootstrap/dist/css/bootstrap.min.css";

export const Register = () => {
  return (
    <>
      <br />
      <br />
      <div className="login-form">
        <h1>Registrate</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Apellido" />
        </div>
        <Input type="correo" placeholder="Correo electronico" />
        <Input type="password" placeholder="Contraseña" />
        <>
          <br />
          <br />
        </>
        <Button
          text="Registrate"
          onClick={() => {}}
          color="#007BFF"
          type="submit"
        />
        <hr className="my-4"></hr>
        <div className="d-flex flex-column">
          <button className="btn btn-danger btn-user btn-block mb-2">
            <i className="fab fa-google fa-fw"></i> Registrate con Google
          </button>
          <button className="btn btn-primary btn-user btn-block">
            <i className="fab fa-facebook-f fa-fw"></i> Registrate con
            Facebook
          </button>
        </div>
      </div>
    </>
  );
};
