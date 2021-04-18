import { useDispatch, useSelector } from "react-redux";
import { addProd } from "../redux/actions";
import { toggleForm } from "../redux/actions";

function AddProductForm() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProd(e.target["product-name-input"].value, products.length + 1)
    );
    dispatch(toggleForm());
  };

  return (
    <form
      className="add-product-form d-flex flex-column"
      onSubmit={handleSubmit}
    >
      <label className="form-label">
        Product Name
        <input
          type="text"
          name="product-name-input"
          className="form-control"
          required
        />
      </label>
      <button type="submit" className="btn btn-success">
        Add product
      </button>
    </form>
  );
}

export default AddProductForm;
