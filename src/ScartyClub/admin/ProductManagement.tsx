import { useState } from "react";

export const ProductManagement = () => {
  const [products, setProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState("");

  const handleAddProduct = () => {
    if (newProduct.trim() !== "") {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  };

  const handleDeleteProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="ProductManagement">
      <h3>Gestión de Productos</h3>
      <input
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Nuevo producto"
      />
      <button onClick={handleAddProduct}>Agregar Producto</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => handleDeleteProduct(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
