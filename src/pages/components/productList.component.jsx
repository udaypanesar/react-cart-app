import { useEffect, useState } from "react";
import ProductCard from "./productCard.component";
import { useDispatch } from "react-redux";
import { addProducts } from "../slice/product.slice";

const ProductList = () => {
  // Can I directly call dispatch in useEffect and then useSelector to get productList and map it?
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    dispatch(addProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  //console.log("Products",products);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to our Ecommerce Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((item) => {
          return (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ProductCard product={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
