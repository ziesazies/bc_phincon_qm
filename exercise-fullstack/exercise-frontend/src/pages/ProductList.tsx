import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../store/productsSlice";
import type { RootState, AppDispatch } from "../store";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus produk ini?")) {
      dispatch(deleteProduct(id));
    }
  };

  if (loading)
    return (
      <div className="text-center mt-10 text-blue-500 text-lg font-semibold">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-center mt-10 text-red-500 text-lg font-semibold">
        Error: {error}
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-amber-400">Product Catalog</h1>
        <Link
          to="/add"
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
        >
          + Add Product
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-xl transition bg-white"
          >
            <h2 className="text-xl font-semibold text-cyan-600">
              {product.name}
            </h2>
            <p className="text-gray-600">
              Price: Rp{product.price.toLocaleString()}
            </p>
            <div className="mt-4 flex justify-between items-center gap-3 text-sm px-4">
              <Link
                to={`/products/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                Detail
              </Link>
              <Link
                to={`/edit/${product.id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
