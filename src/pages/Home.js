import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Main from "../layout/Main";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  const state = useSelector(state => state)
  // console.log(state);

  return (
    <>
      <Main></Main>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          products.map(product => <ProductCard
            key={product._id}
            product={product}
          ></ProductCard>)
        }
      </div>
    </>
  );
};

export default Home;
