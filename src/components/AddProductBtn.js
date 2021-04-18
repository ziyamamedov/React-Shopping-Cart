import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleForm } from "../redux/actions";

//This button opens and closes add-product-form
function AddProductBtn() {
  const dispatch = useDispatch();
  const isFormActive = useSelector((store) => store.isFormActive);

  return (
    <button
      onClick={() => dispatch(toggleForm())}
      className={`btn ${isFormActive ? "btn-danger" : "btn-success"}`}
    >
      {isFormActive ? "Close" : "Add new product"}
    </button>
  );
}

export default AddProductBtn;
