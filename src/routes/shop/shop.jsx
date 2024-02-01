import { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/productCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-12 mt-10 mx-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
