import { useState } from "react";
import "./Admin.css";

export const Admin = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState<null | number>(null);
  const [editItem, setEditItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEditItem = (index: number) => {
    setEditIndex(index);
    setEditItem(items[index]);
  };

  const handleUpdateItem = () => {
    if (editItem.trim() !== "") {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? editItem : item
      );
      setItems(updatedItems);
      setEditIndex(null);
      setEditItem("");
    }
  };

  return (
    <div className="Admin">
      <h2>Panel de Administración</h2>
      <div className="Admin-controls">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Nuevo elemento"
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
      <ul className="Admin-list">
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editItem}
                  onChange={(e) => setEditItem(e.target.value)}
                />
                <button onClick={handleUpdateItem}>Actualizar</button>
                <button onClick={() => setEditIndex(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                {item}
                <button onClick={() => handleEditItem(index)}>Editar</button>
                <button onClick={() => handleDeleteItem(index)}>
                  Eliminar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
