import React from "react";
import { products } from "../data/products";
import ProductItem from "../components/products/ProductItem";

interface Props {}

const Index: React.FC<Props> = () => {
  return (
    <>
      <div className="page--products">
        <div className="products">
          {products.map((product) => (
            <ProductItem key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
