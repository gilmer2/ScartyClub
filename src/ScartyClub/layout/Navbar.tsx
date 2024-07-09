import React from "react";
import { Paths } from "../../path/paths";
import CustomNavLink from "../components/CustomNavLink";
import { getEmailFromLocalStorage, removeTokenFromLocalStorage } from "../../utils/authUtils";
import { useQuery } from "@tanstack/react-query";
import { findOnClient } from "../../service/client.service";


export const Navbar: React.FC = () => {
  const email = getEmailFromLocalStorage();

  const { data } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      const result = await findOnClient(email as string);
      return result.data;
    }
  })
  return (
    <>
      <header className="App-header">
        <h1>ScartyClub</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <CustomNavLink
                  className="nav-link"
                  to={Paths.product}
                  activeStyle={{ backgroundColor: "blue", color: "white" }}
                  inactiveStyle={{ color: "#282c34" }}
                >
                  Inicio
                </CustomNavLink>
              </li>
              <li className="nav-item">
                <CustomNavLink
                  className="nav-link"
                  to="/about"
                  activeStyle={{ backgroundColor: "blue", color: "white" }}
                  inactiveStyle={{ color: "#282c34" }}
                >
                  Acerca de
                </CustomNavLink>
              </li>
              <li className="nav-item">
                <CustomNavLink
                  className="nav-link"
                  to="/services"
                  activeStyle={{ backgroundColor: "blue", color: "white" }}
                  inactiveStyle={{ color: "#282c34" }}
                >
                  Servicios
                </CustomNavLink>
              </li>
              <li className="nav-item">
                <CustomNavLink
                  className="nav-link"
                  to="/contact"
                  activeStyle={{ backgroundColor: "blue", color: "white" }}
                  inactiveStyle={{ color: "#282c34" }}
                >
                  Contacto
                </CustomNavLink>
              </li>
              <li className="nav-item">
                <CustomNavLink
                  className="nav-link"
                  to={Paths.login}
                  activeStyle={{ backgroundColor: "blue", color: "white" }}
                  inactiveStyle={{ color: "#282c34" }}
                  onClick={removeTokenFromLocalStorage}
                >
                  Cerrar Sesión
                </CustomNavLink>
              </li>
              {
                data?.role === "admin" && (
                  <li className="nav-item">
                    <CustomNavLink
                      className="nav-link"
                      to="/admin"
                      activeStyle={{ backgroundColor: "blue", color: "white" }}
                      inactiveStyle={{ color: "#282c34" }}
                    >
                      Admin
                    </CustomNavLink>
                  </li>
                )
              }
              <li>
                <div className="point">
                  Puntos: 
                  {
                    " " + data?.points
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
