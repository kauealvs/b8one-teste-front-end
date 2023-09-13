import React, { useState, useEffect } from "react";
import { getProducts } from "../../service";
// import "./ProductList.css";

const ProductList = ({ sectionTitle, maxProducts = 4 }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  return (
    <section className="product-section">
      <div className="container-products">
        lorem ipisilum
        {/* {products?.map(
          ({ title, price, images, discountPercentage }, index) =>
            index <= maxProducts - 1 && (
              <div key={index} className="product">
                <div className="img-container">
                  <p className="discount">{discountPercentage}%</p>
                  <a href="/">
                    <button>Compra rápida</button>
                  </a>
                  <img src={images[0]} />
                </div>
                <h2>{title}</h2>
                <div className="prices">
                  <p className="price">R${price}</p>
                  <p className="net-price">R${discountPercentage}</p>
                </div>
              </div>
            )
        )} */}
      </div>
    </section>
  );
};

export default ProductList;
