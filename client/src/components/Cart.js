import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts, removefromCart } from "../js/cartSlice";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [qty, setqty] = useState(1);

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(cartItems);
  const handleCarte = () => {
    if (isAuth) {
      navigate("/shipping");
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      className="content-page"
      style={{
        paddingTop: "120px",
        width: "100vw",
        background: "#f5f5f5",
        paddingBottom: "120px",
      }}
    >
      <div className="main-content">
        <ion-icon
          name="close-sharp"
          style={{
            position: "absolute",
            marginLeft: "810px",
            marginTop: "-5px",
            cursor: "pointer",
          }}
        ></ion-icon>
        <h1>Panier</h1>
        <div className="content-panier">
          {cartItems.length === 0 ? (
            <h1>go shop</h1>
          ) : (
            cartItems?.map((el) => (
              <div className="content-cart1">
                <ion-icon
                  name="close-sharp"
                  style={{
                    position: "absolute",
                    marginLeft: "790px",
                    marginTop: "-50px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(removefromCart(el?._id));
                  }}
                ></ion-icon>
                <div className="content-cart">
                  <img src={`http://localhost:5000${el?.url}`}></img>
                  <h4>{el.name}</h4>
                </div>
                <div className="price-button">
                  <h5>{el.price} dt</h5>
                  <div className="content-plus-munis">
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "0px",
                        marginTop: "0px",
                      }}
                      class="boxx-3"
                    >
                      <div className="btn btn-three">
                        <span>
                          <ion-icon name="add-outline"></ion-icon>
                        </span>
                      </div>
                    </div>
                    <select className="qty" value={el.quantity}>
                      {[...Array(el.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "0px",
                        marginTop: "0px",
                      }}
                      class="boxx-3"
                    >
                      <div className="btn btn-three">
                        <span>
                          <ion-icon name="remove-outline"></ion-icon>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="resume-panier">
        <h1>Résumé du panier</h1>
        <div className="content-panier">
          <div className="content-cart1">
            <div className="content-cart">
              <h2>
                Total ({cartItems?.length} items)
                <span className="price">
                  {cartItems?.reduce((a, c) => a + c.price * qty, 0)} DT
                </span>
              </h2>
            </div>
          </div>
          <div className="content-cart11">
            <div className="content-cart">
              <h4>Sub Total</h4>
              <h5 style={{ margin: "5px 0px 0px 183px" }}></h5>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "90px",
            marginTop: "50px",
          }}
          className="boxx-3"
          onClick={handleCarte}
        >
          <div className="btn btn-three">
            <span>Commmand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
