import { NavLink } from "react-router-dom";
import { Paths } from "../../path/paths";

export const Navbar = () => {
  return (
    <>
      <header className="App-header">
        <h1>ScartyClub</h1>
      </header>
      <nav className="App-nav">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about">Acerca de</NavLink>
          </li>
          <li>
            <NavLink to="/services">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
          <li>
            <NavLink to={Paths.login}>Cerrar Sesion</NavLink>
          </li>
          <li>
            <NavLink to='/admin'>Admin</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
