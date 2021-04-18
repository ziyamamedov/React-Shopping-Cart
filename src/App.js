import ProductsList from "./components/ProductsList";
import AddProductForm from "./components/AddProductForm";
import AddProductBtn from "./components/AddProductBtn";
import { useSelector } from "react-redux";

function App() {
  //If true the add-new-product form will open
  const isFormActive = useSelector((store) => store.isFormActive);

  return (
    <div className="App">
      <div className="container d-flex flex-column justify-content-center">
        <div className="add-new-product-block">
          <AddProductBtn />
          {isFormActive && <AddProductForm />}
        </div>
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
