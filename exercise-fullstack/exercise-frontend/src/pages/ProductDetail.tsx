import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await res.json();
        setProduct(data.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error || !product)
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-2 text-gray-700">
        Price: Rp{product.price.toLocaleString()}
      </p>
      <p className="text-md mb-2">Category: {product.category}</p>
      <p className="text-md mb-6">Stock: {product.stock}</p>
      <Link to="/" className="text-blue-500 underline">
        &larr; Back to Product List
      </Link>
    </div>
  );
};

export default ProductDetail;
