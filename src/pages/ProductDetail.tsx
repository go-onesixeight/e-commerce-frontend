import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products, Product } from "../data/products";
import PageNotFound from "./PageNotFound";

interface Props {}

const ProductDetail: React.FC<Props> = () => {
  const params = useParams() as { id: string };
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const dataProduct = products.find((item) => item.id === params.id);
    if (dataProduct) setProduct(dataProduct);
    else setProduct(undefined);
  }, [params]);

  console.log("product =>", product);

  if (!product) return <PageNotFound />;

  return (
    <>
      <div className="page--product-detail">
        <div className="product-detail__section">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-detail__section">
          <div className="product-detail__sub-section">
            <h3 className="header">{product.title}</h3>
            <p className="paragraph">{product.description}</p>
          </div>
          <div className="product-detail__sub-section">
            <p className="paragraph">
              Price:{" "}
              <span className="paragraph--orange">
                {product.price.toFixed(2)}
              </span>
            </p>
          </div>
          <div className="product-detail__sub-section product-detail__sub-section--stock">
            <p className="paragraph">
              Availability <span className="paragraph--success">In stock</span>
            </p>
          </div>
          <div className="product-detail__sub-section quantity-control">
            <div className="qty-action">-</div>
            <div className="qty-action qty-action--qty">
              <p className="paragraph">1</p>
            </div>
            <div className="qty-action">+</div>
          </div>

          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
