import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
         <Outlet />
      </div>
    </div>
  );
};
