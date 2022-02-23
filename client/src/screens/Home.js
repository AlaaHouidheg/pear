import React, { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel";
import Productcard from "../components/Productcard";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import { Player } from "video-react";
import ReactPlayer from 'react-player'
const Home = () => {
  const products = useSelector((state) => state.product.products);
  const [price, setprice] = useState([]);
  const [rate, setrate] = useState([]);
  useEffect(() => {
    if (products) {
      setprice(
        products.filter((el) => parseFloat(el.price) == parseFloat("100 €"))
      );
    }
  }, [products]);
  useEffect(() => {
    if (products) {
      setrate(
        products.filter((el) => parseFloat(el.rating) == parseFloat("5"))
      );
    }
  }, [products]);

  return (
    <div className="home">
      <div className="content">
        <img src="https://demo.ishithemes.com/opencart/OPC136/OPC136L02/image/catalog/slider/banner1.png" />
        <Caroussel />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {price.map((el) => (
          <Productcard el={el} />
        ))}
      </div>
      <div className="beauty">
        {/* <img
          className="choose-product"
          src="https://demo.ishithemes.com/opencart/OPC136/OPC136L02/image/catalog/features/featuresbackground.png"
       /> */}
       <ReactPlayer url="https://pin.it/bcfyZT8" />
        <div>
          <h1>Choose Your Products</h1>
          <div>
            <div style={{ display: "flex" }}>
              <img
                src="/assets/im3.png"
                style={{ width: "70px", height: "50px" }}
              />
              <h4>FOR YOUR HEALTH</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspend
            </p>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <img
                src="/assets/im3.png"
                style={{ width: "70px", height: "50px" }}
              />
              <h4>FOR YOUR SKIN</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspend
            </p>
          </div>
        </div>
      </div>
      <div className="category-title">
        <h1>Our Category</h1>
        <img src="/assets/im4.png"></img>

        <div>
          <div className="cat-liste">
            <ul>
              <li> Lipstick</li>
              <li> Make-Up-Brush </li>
              <li> Nail-Art </li>
              <li> Skin-care </li>
              <li> Hair-care </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="img-liste">
        <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitopbanners/views/img/topbanner-2.jpg" />
        <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitopbanners/views/img/topbanner-3.jpg" />
        <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitopbanners/views/img/topbanner-1.jpg" />
        <img src="https://static3.depositphotos.com/1000260/228/i/450/depositphotos_2280759-stock-photo-cosmetician-make-mask-facial-massage.jpg" />
        <img src="https://st4.depositphotos.com/6903990/21757/i/450/depositphotos_217572444-stock-photo-brunette-woman-long-healthy-shiny.jpg" />
      </div>
      <div className="category-title">
        <h1 style={{ marginTop: "20px" }}>Special Offers</h1>
        <img src="/assets/im4.png"></img>
      </div>
      <div className="special-offer">
        {rate.map((el) => (
          <Productcard el={el} />
        ))}
      </div>

      <div class="testimonial-group">
        <div className="category-title">
          <h1 style={{ marginTop: "150px" }}>Our Testimonials</h1>
          <img src="/assets/im4.png" alt="" />
        </div>
        <div className="testimonials">
          <OwlCarousel loop margin={10} nav autoPlay={true}>
            <div className="testimonials-card">
              <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitestimonials/views/img/testimonial-1.jpg"></img>
              <div className="content-card">
                <h5>Luies Charles</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fuga harum blanditiis omnis.{" "}
                </p>
              </div>
            </div>
            <div className="testimonials-card">
              <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitestimonials/views/img/testimonial-2.jpg"></img>
              <div className="content-card">
                <h5>Luies Charles</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fuga harum blanditiis omnis.{" "}
                </p>
              </div>
            </div>
            <div className="testimonials-card">
              <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitestimonials/views/img/testimonial-3.jpg"></img>
              <div className="content-card">
                <h5>Luies Charles</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fuga harum blanditiis omnis.{" "}
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
