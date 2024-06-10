import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};
