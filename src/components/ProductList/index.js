import { React, useState, useEffect } from "react";
import { getProducts } from "../../service";

import "./index.css";
import check from "../../assets/img/Vector.png";
import wishlistAdd from "../../assets/img/wishlist-add.png";
import wishlist from "../../assets/img/wishlist.png";

const ProductList = ({ maxProducts = 2 }) => {
  const [button, setButton] = useState([]);
  const [wishlistButton, setWishlistButton] = useState([]);

  const [wishlistButtonseen, setWishlistButtonseen] = useState([]);

  useEffect(() => {
    const seenValues = {};
    const uniqueArray = [];

    for (const value of wishlistButton) {
      if (!seenValues[value]) {
        seenValues[value] = true;
        uniqueArray.push(value);
      } else {
        // Se o valor já foi visto, remova-o do array
        const index = uniqueArray.indexOf(value);
        if (index !== -1) {
          uniqueArray.splice(index, 1);
        }
      }
    }

    setWishlistButtonseen(uniqueArray);
  }, [wishlistButton]);

  return (
    <section className="product-section">
      <div className="container-products">
        {getProducts?.map(
          ({ id, title, price, image, Maxinstallment, listPrice }, index) =>
            index <= maxProducts - 1 && (
              <div key={index} className="product">
                <div className="img-container">
                  <img src={image} />

                  <button
                    id={id}
                    className="button-wishlist"
                    onClick={(e) => {
                      e.currentTarget.id == id &&
                        setWishlistButton([...wishlistButton, id]);
                    }}
                  >
                    <img
                      className="wishlist"
                      src={
                        wishlistButtonseen.includes(id) ? wishlistAdd : wishlist
                      }
                    />
                  </button>
                </div>
                <div className="itens">
                  <h2>{title}</h2>
                  <div className="prices">
                    <p className="list-price">
                      R${" "}
                      {listPrice.toLocaleString("BRL", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p className="price">
                      R${" "}
                      {price.toLocaleString("BRL", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <p className="installments">
                      Em até{" "}
                      <span>
                        {Maxinstallment}x de R${" "}
                        {(price / Maxinstallment).toLocaleString("BRL", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>{" "}
                      sem juros
                    </p>
                  </div>
                  <button
                    id={id}
                    onClick={(e) => {
                      e.currentTarget.id == id && setButton([...button, id]);
                    }}
                    className={`btn-add ${button.includes(id) ? "added" : ""}`}
                  >
                    {button.includes(id) ? (
                      <span>
                        <img className="check-icon" src={check} />
                        Adicionado
                      </span>
                    ) : (
                      "Adicionar"
                    )}
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default ProductList;
