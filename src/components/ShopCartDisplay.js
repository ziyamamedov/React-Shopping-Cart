import { useSelector } from "react-redux";

function ShopCartDisplay() {
  const products = useSelector((store) => store.products);
  let prodQuanTotal = 0;

  products.forEach((prod) => {
    prodQuanTotal += prod.orderedQuan;
  });

  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{ marginBottom: "20px" }}
    >
      <div className="container-fluid justify-content-start">
        <span className="navbar-brand mb-0 h1">Cart:</span>
        <span className="navbar-brand mb-0 h1">{prodQuanTotal}</span>
      </div>
    </nav>
  );
}

export default ShopCartDisplay;
