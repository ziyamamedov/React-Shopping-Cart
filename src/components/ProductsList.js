import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductsList() {
  const products = useSelector((store) => store.products);

  return (
    <ul className="products-list">
      {products.length === 0 ? (
        <h3>No products</h3>
      ) : (
        products.map((prod) => (
          <ProductItem key={prod.id} id={prod.id} name={prod.name} />
        ))
      )}
    </ul>
  );
}

export default ProductsList;
