import React from 'react';
import Feedback from './Feedback';
import Footer from './Footer';
import Landing from './Landing';
import Products from './Products';
import Stiker from './Stiker';
import Works from './Works';

const Home = () => {
    return (
        <div>
          <Landing></Landing>
          <Stiker></Stiker>
           <Products></Products>
           <Works></Works>
          <Feedback></Feedback>
          <Footer></Footer>
        </div>
    );
};

export default Home;