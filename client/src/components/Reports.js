import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getall } from "../js/userSlice";
import Footer from "../screens/Footer";

const Reports = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall());
  }, []);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const users = useSelector((state) => state.user.users);
  const products = useSelector((state) => state.product.products);

  let nails = products?.filter((el) => el.category == "nails");
  let eyeshadow = products?.filter((el) => el.category == "eyeshadow");
  let eyeliner = products?.filter((el) => el.category == "eyeliner");
  let mascara = products?.filter((el) => el.category == "mascara");
  let lipstick = products?.filter((el) => el.category == "lipstick");
  let eyecare = products?.filter((el) => el.category == "eyecare");
  let facemask = products?.filter((el) => el.category == "facemask");
  let foundation = products?.filter((el) => el.category == "foundation");
  let powder = products?.filter((el) => el.category == "powder");
  let suncare = products?.filter((el) => el.category == "suncare");
  let hairshampo = products?.filter((el) => el.category == "hairshampo");
  let hairdye = products?.filter((el) => el.category == "hairdye");
  let hairstyle = products?.filter((el) => el.category == "hairstyle");
  let eyebrow = products?.filter((el) => el.category == "eyebrow");
  let blush = products?.filter((el) => el.category == "blush");
  let concealer = products?.filter((el) => el.category == "concealer");
  let primer = products?.filter((el) => el.category == "primer");
  let lipliner = products?.filter((el) => el.category == "lipliner");
  let liquidlip = products?.filter((el) => el.category == "liquidlip");

  const data = {
    labels: [
      "nails",
      "eyeshadow",
      "eyeliner",
      "mascara",
      "lipstick",
      "eyecare",
      "facemask",
      "foundation",
      "powder",
      "suncare",
      "hairshampo",
      "hairdye",
      "hairstyle",
      "eyebrow",
      "blush",
      "concealer","primer","lipliner","liquidlip"
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          nails?.length,
          eyeshadow?.length,
          eyeliner?.length,
          mascara?.length,
          lipstick?.length,
          eyecare?.length,
          facemask?.length,
          foundation?.length,
          powder?.length,
          suncare?.length,
          hairshampo?.length,
          hairdye?.length,
          hairstyle?.length,
          eyebrow?.length,
          blush?.length,
          concealer?.length,primer?.length,lipliner?.length,liquidlip?.length
        ],
        backgroundColor: [
          "red",
          "blue",
          "green",
          "yellow",
          "gray",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "black",
          "rgba(90, 203, 100, 1)",
          "rgba(120, 12, 14, 1)",
          "rgba(230, 200, 200, 1)",
          "rgba(230, 100, 100, 1)",
          "rgba(230, 50, 50, 1)",
          "rgba(120, 50, 100, 1)","rgba(254, 200, 20, 1)","rgba(54, 200, 10, 1)","rgba(54, 200, 50, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div className="reports-liste">
        <div className="reports-element">
          <ion-icon name="people-sharp"></ion-icon>
          <h5>Users</h5>
          
        <h1 style={{marginTop: "50px",
    marginRight: "30px"}}>{users?.length}</h1>
        
        </div>
        <div className="reports-element">
          <ion-icon name="cart-sharp"></ion-icon>
          <h5>Orders</h5>
        </div>
        <div className="reports-element">
        <ion-icon name="cart-sharp"></ion-icon>
          <h5 >Products</h5>

          <h1 style={{marginTop: "50px",
    marginRight: "30px"}}>{products?.length}</h1>
        </div>
      </div>
      <Pie data={data} />
    </div>
  );
};

export default Reports;
