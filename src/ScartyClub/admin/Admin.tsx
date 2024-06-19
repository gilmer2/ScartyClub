import "./Admin.css";
import { UserManagement } from "./UserManagement";
import { ProductManagement } from "./ProductManagement";
import OrderManagement from "./OrderManagement";
import Statistics from "./Statistics";

export const Admin = () => {
  return (
    <div className="Admin">
      <h2>Panel de Administración</h2>
      <div className="Admin-section">
        <UserManagement />
      </div>
      <div className="Admin-section">
        <ProductManagement />
      </div>
      <div className="Admin-section">
        <OrderManagement />
      </div>
      <div className="Admin-section">
        <Statistics />
      </div>
    </div>
  );
};

export default Admin;
