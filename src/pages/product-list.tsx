import products from "../products.json";
import { Link } from "react-router-dom";

export interface ISetProduct {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
  dateCreated: string;
}

export const ProductList = () => {
  const productsData = products as ISetProduct[];

  return (
    <div>
      <h2>Product List</h2>

      <ul>
        {productsData.map((product, i) => (
          <li className="product-item" key={i}>
            <Link to={`/product/${product.id}`}>
              <div>
                <div className="product-name">{product.name}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-status">{product.status}</div>
                <div className="product-date">{product.dateCreated}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
