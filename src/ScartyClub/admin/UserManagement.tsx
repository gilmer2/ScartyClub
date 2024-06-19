import { useState } from "react";

export const UserManagement = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [newUser, setNewUser] = useState("");

  const handleAddUser = () => {
    if (newUser.trim() !== "") {
      setUsers([...users, newUser]);
      setNewUser("");
    }
  };

  const handleDeleteUser = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="UserManagement">
      <h3>Gestión de Usuarios</h3>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Nuevo usuario"
      />
      <button onClick={handleAddUser}>Agregar Usuario</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDeleteUser(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
