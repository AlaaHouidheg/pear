import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { addToCart, cartLength } from "../js/cartSlice";
import Footer from "./Footer";
const ProductDetails = () => {
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const prod = products?.find((el) => el._id == params.id);
  const dispatch = useDispatch();

  const [qty, setqty] = useState(1);

  return (
    <div>
      <div className="product-details">
        <div className="img-detail">
          <img src={`http://localhost:5000${prod?.url}`} />
        </div>
        <div className="detail-content">
          <h1>{prod?.name}</h1>
          <ReactStars
            count={5}
            size={20}
            value={parseInt(prod?.rating)}
            edit={false}
            activeColor="#ffd700"
            className="stars"
          />
          <p>{prod?.description}</p>
          <div className="review-block">
            <div>
              <ion-icon name="chatbox"></ion-icon>
              <h5 style={{ marginLeft: "4px" }}>Read Review</h5>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <ion-icon name="create"></ion-icon>
              <h5 style={{ marginRight: "6px" }}>Write Review</h5>
            </div>
          </div>
          <h4>{prod?.price}</h4>
          <div className="achat-product">
            <div className="number-product">
              <select className="qty" value={prod.quantity}>
                {[...Array(prod.stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{ marginLeft: "40px" }}
              class="boxx-3"
              onClick={() => dispatch(addToCart(prod?._id))}
            >
              <div className="btn btn-three">
                <span>ADD TO CART</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
