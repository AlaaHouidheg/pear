import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../js/userSlice";
import logo from "../components/logo.png";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const [search, setsearch] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector(".navbar");
      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
      } else {
        nav.classList.remove("add-shadow");
      }
    });
  }, []);

  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setshow(!show)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img className="logo" src={logo} />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Skin care
          <ul>
            <Link to="/eyecare">
              <li>Eye care</li>
            </Link>
            <Link to="/facemask">
              <li>Face mask</li>
            </Link>
            <Link to="/suncare">
              <li>Sun care</li>
            </Link>
          </ul>
        </li>
        <li>
          Hair care
          <ul>
            <Link to="/shampo">
              <li>Shampoo</li>
            </Link>
            <Link to="/hairdye">
              <li>Hair dye</li>
            </Link>
            <Link to="/hairstyle">
              <li>Hair styling</li>
            </Link>
          </ul>
        </li>
        <li>
          Make up
          <ul>
            <li>
              Eye
              <ul>
                <Link to="/eyebrow">
                  <li>Eyebrow</li>
                </Link>
                <Link to="/eyeliner">
                  <li>Eyeliner</li>
                </Link>
                <Link to="/eyeshadow">
                  <li>Eyeshadow</li>
                </Link>
                <Link to="/mascara">
                  <li>Mascara</li>
                </Link>
              </ul>
            </li>

            <li>
              Face
              <ul>
                <Link to="/blush">
                  <li>Blush & Bronzer</li>
                </Link>
                <Link to="/concealer">
                  <li>Concealer</li>
                </Link>
                <Link to="/foundation">
                  <li>Foundation</li>
                </Link>
                <Link to="/facepowder">
                  {" "}
                  <li>Face Powder</li>
                </Link>
                <Link to="/faceprimer">
                  <li>Face Primer</li>
                </Link>
              </ul>
            </li>
            <li>
              Lips
              <ul>
                <Link to="/lipliner">
                  {" "}
                  <li>Lip Liner</li>
                </Link>
                <Link to="/lipstick">
                  <li>Lipstick</li>
                </Link>
                <Link to="/liquidlipstick">
                  <li>Liquid Lipstick</li>
                </Link>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Nails">Nails</Link>
        </li>
        <li>
          <Link to="/Contactus">Contact us</Link>
        </li>
      </ul>
      <span>
        {search ? (
          <input className="search-product" type="text" placeholder="Search" />
        ) : null}
        <ion-icon
          name="search-outline"
          style={{ paddingRight: "10px", width: "20px", height: "20px" }}
          onClick={() => setsearch(!search)}
        ></ion-icon>

        <Link to="/Login">
          {" "}
          <ion-icon
            name="person-outline"
            style={{ paddingRight: "10px", width: "20px", height: "20px" }}
          ></ion-icon>
        </Link>
        <div className="cartt" onClick={() => navigate("/cart")}>
          <ion-icon
            className="cartt"
            name="cart-outline"
            style={{ width: "20px", height: "20px" }}
          ></ion-icon>
          <span>0</span>
        </div>
        <ion-icon
          style={{ width: "20px", height: "20px" }}
          name="log-in-outline"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        ></ion-icon>
        {/*<button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          logout
        </button>*/}
      </span>
      {show ? (
        <ul className="nav-links-small">
          <h1 style={{ cursor: "pointer" }} onClick={() => setshow(!show)}>
            <ion-icon name="close-outline"></ion-icon>
          </h1>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Skincare">Skin care</Link>
          </li>
          <li>
            <Link to="/Haircare">Hair care</Link>
          </li>
          <li>Make up</li>
          <li>
            <Link to="/Nails">Nails</Link>
          </li>
          <li>
            <Link to="/Contactus">Contact us</Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
