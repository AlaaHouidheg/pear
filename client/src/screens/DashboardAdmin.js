import React, { useState } from "react";
import { Link } from "react-router-dom";
import Allproduct from "../components/Allproduct";
import Orders from "../components/Orders";
import Reports from "../components/Reports";
import Footer from "./Footer";

const DashboardAdmin = ({ ping, setping }) => {
  const [tab, settab] = useState("0");
  return (
    <div>
      <div className="Dashboard-space">
        <div className="navbar-admin">
          <ul>
            <li onClick={() => settab("0")}>
              <ion-icon name="analytics-sharp"></ion-icon>Reports
            </li>
            <li onClick={() => settab("1")}>
              <ion-icon name="cart-sharp"></ion-icon>Products
            </li>
            <li onClick={() => settab("2")}>
              <ion-icon name="grid-sharp"></ion-icon>Orders
            </li>
            {/*<li>
            <ion-icon name="star-sharp"></ion-icon>Promos
          </li>*/}
          </ul>
        </div>
        <div className="dashboard-liste">
          {tab == "0" ? <Reports /> : null}
          {tab == "1" ? <Allproduct ping={ping} setping={setping} /> : null}
          {tab == "2" ? <Orders /> : null}
        </div>
      </div>
      {/*<Footer/>*/}
    </div>
  );
};

export default DashboardAdmin;
