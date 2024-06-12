import { NavLink, Outlet } from "react-router-dom";
import { Paths } from "../../path/paths";

export const Layout: React.FC = () => {
  return (
    <div>
      <NavLink
        to={Paths.product} 
      >
        productos
      </NavLink>
      <NavLink
        to={Paths.otros} 
      >
        otros
      </NavLink>
      
      <Outlet />
    </div>
  );
};
