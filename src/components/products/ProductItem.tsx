import React from "react";
import { Product } from "../../data/products";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <div className="product">
          <img
            src={product?.imageUrl}
            alt={product?.title}
            className="product__detail-image"
          />
          <div className="product__detail">
            <h4 className="header--center">{product.title}</h4>
            <p className="paragraph--center paragraph--bold paragraph--orange">
              ${product?.price?.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
