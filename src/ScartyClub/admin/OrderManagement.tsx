import { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState<string[]>([]);
  const [newOrder, setNewOrder] = useState("");

  const handleAddOrder = () => {
    if (newOrder.trim() !== "") {
      setOrders([...orders, newOrder]);
      setNewOrder("");
    }
  };

  const handleDeleteOrder = (index: number) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <div className="OrderManagement">
      <h3>Gestión de Pedidos</h3>
      <input
        type="text"
        value={newOrder}
        onChange={(e) => setNewOrder(e.target.value)}
        placeholder="Nuevo pedido"
      />
      <button onClick={handleAddOrder}>Agregar Pedido</button>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order}
            <button onClick={() => handleDeleteOrder(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderManagement;
