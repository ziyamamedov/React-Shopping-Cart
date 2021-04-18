import { useDispatch } from "react-redux";
import { deleteProd } from "../redux/actions";

function ProductItem({ id, name }) {
  const dispatch = useDispatch();

  return (
    <li className="product-item d-flex justify-content-between align-items-center">
      <span className="badge bg-warning text-dark">Zero</span>
      <span className="product-item-name p-2 bg-light rounded">{name}</span>
      <button className="btn btn-secondary">+</button>
      <button className="btn btn-secondary">-</button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(deleteProd(id))}
      >
        Delete
      </button>
    </li>
  );
}

export default ProductItem;
