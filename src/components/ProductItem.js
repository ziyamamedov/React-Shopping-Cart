import { useDispatch } from "react-redux";
import { deleteProd, addProdQuan, reduceProdQuan } from "../redux/actions";

function ProductItem({ id, name, quan }) {
  const dispatch = useDispatch();

  return (
    <li className="product-item d-flex justify-content-between align-items-center">
      <span className="badge bg-warning text-dark">
        {quan === 0 ? "Zero" : quan}
      </span>
      <span className="product-item-name p-2 bg-light rounded">{name}</span>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(addProdQuan(id))}
      >
        +
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(reduceProdQuan(id))}
      >
        -
      </button>
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
