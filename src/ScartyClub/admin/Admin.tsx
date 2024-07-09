import "./Admin.css";
import ClientTable from "./clientesTable";

export const Admin = () => {
  return (
    <div>
      <header className="App-header">
        <h1>ScartyClub</h1>
        <h2>Admin</h2>
      </header>
      <div className="Admin">
        <h2>Panel de Administración</h2>
        <div className="Admin-section">
          <ClientTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
