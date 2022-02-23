import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const EyeCare = () => {
  const products = useSelector((state) => state.product.products);

  const [eyecare, seteyecare] = useState([]);
  useEffect(() => {
    if (products) {
      seteyecare(products.filter((el) => el.category == "eyecare"));
    }
  }, [products]);
  return <div><div className="liste-product">
  {eyecare.map((el) => (<Productcard el={el}/>))}
        </div>
        <Footer/>
      
  </div>;
};

export default EyeCare;
