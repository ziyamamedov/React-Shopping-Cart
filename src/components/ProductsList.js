import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductsList() {
  const products = useSelector((store) => store.products);

  return (
    <ul className="products-list">
      {products.map((prod) => (
        <ProductItem key={prod.id} name={prod.name} />
      ))}
    </ul>
  );
}

export default ProductsList;
