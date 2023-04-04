import {Link} from "react-router-dom";

const Item = () => {
  return (
    <Link to="/item/:id">
      <div className="Item"></div>
    </Link>
  )
}

export default Item;