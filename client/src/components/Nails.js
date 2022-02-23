import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Nails = () => {
    const products = useSelector((state) => state.product.products);

  const [nails, setnails] = useState([]);
  useEffect(() => {
    if (products) {
      setnails(products.filter((el) => el.category == "nails"));
    }
  }, [products]);
  return<div> <div className="liste-product">
      {nails.map((el) => (<Productcard el={el}/>))}
      </div>
      <Footer/>
  </div>;
};

export default Nails;
