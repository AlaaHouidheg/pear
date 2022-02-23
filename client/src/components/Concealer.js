import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";

const Concealer = () => {
  const products = useSelector((state) => state.product.products);

  const [concealer, setconcealer] = useState([]);
  useEffect(() => {
    if (products) {
      setconcealer(products.filter((el) => el.category == "concealer"));
    }
  }, [products]);
  return <div><div className="liste-product">
  {concealer.map((el) => (<Productcard el={el}/>))}
        </div>
        <Footer/>
  </div>;
};

export default Concealer;
