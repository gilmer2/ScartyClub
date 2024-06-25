import "./Admin.css";
import ClientTable from "./clientesTable";

export const Admin = () => {
  return (
    <div className="Admin">
      <h2>Panel de Administración</h2>
      <div className="Admin-section">
        <ClientTable />
      </div>
    </div>
  );
};

export default Admin;
