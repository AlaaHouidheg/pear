import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postorder } from "../js/orderSlice";
import Footer from "../screens/Footer";

const Orders = () => {
  const items = JSON.parse(localStorage.getItem("cartItems"));
  const shippinginfo = JSON.parse(localStorage.getItem("shippinginfo"));
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [order, setorder] = useState({
    user: user?._id,
    orderItems: items,
    shipping: shippinginfo,
    shippingPrice: 7,
  });
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
        <h1>Order summery</h1>
        <div className="content-panier">
          {items?.map((el) => (
            <div className="content-cart1">
              <div className="content-cart">
                <img src={`http://localhost:5000${el?.url}`}></img>
                <h4>{el.name}</h4>
              </div>
              <h5>{el.price} dt</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="resume-panier">
        <h1>Résumé du panier</h1>
        <div className="content-panier">
          <div className="content-cart1">
            <div className="content-cart">
              <h2>
                Total ({items?.length} items)
                <span className="price">
                  {items?.reduce((a, c) => a + c.price, 0)} DT
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "90px",
            marginTop: "50px",
          }}
          className="boxx-3"
          onClick={() => dispatch(postorder(order))}
        >
          <div className="btn btn-three">
            <span>place order</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
