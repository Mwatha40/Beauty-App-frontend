import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/banner.jpg`} alt="Banner" />
      </header>
      <div>
        <h1>New & Bestsellers</h1>
        <p>Explore the latest and most popular products!</p>
        {/* Add your product list or other content here */}
      </div>
    </>
  );
};

export default Home;


