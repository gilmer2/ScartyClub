function Statistics() {
  const totalUsers = 5;
  const totalProducts = 10;
  const totalOrders = 3;

  return (
    <div className="Statistics">
      <h3>Estadísticas</h3>
      <p>Total de Usuarios: {totalUsers}</p>
      <p>Total de Productos: {totalProducts}</p>
      <p>Total de Pedidos: {totalOrders}</p>
    </div>
  );
}

export default Statistics;
