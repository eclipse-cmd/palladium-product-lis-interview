import { Link, useParams } from "react-router-dom";
import products from "../products.json";
import { ISetProduct } from "./product-list";
import { useMemo } from "react";

export const ProductView = () => {
  const { productId } = useParams();
  const productsData = products as ISetProduct[];

  const product = useMemo(() => productsData.find(({ id }) => id === productId), [productId, productsData]);

  return (
    <div>
      <h2>Product Details</h2>

      <div className="product-card">
        <div className="product-name">{product?.name}</div>
        <div className="product-details">{product?.description}</div>
        <div className="product-status">{product?.status}</div>
        <div className="product-type">{product?.type}</div>
        <div className="product-date">{product?.dateCreated}</div>
      </div>
      <Link to="/">Go back</Link>
    </div>
  );
};
