import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState<number>(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      const product = data.data;
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.stock);
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = { name, price, category, stock };

    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error("Failed to update product");

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-lg max-auto">
      <h1 className="text-2xl font-bold mb-6 text-amber-400">Edit Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          className="border p-2 rounded"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Price"
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
