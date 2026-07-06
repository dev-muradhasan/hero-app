import React from 'react';
import Banner from '../Components/Banner';
import BannerCard from '../Components/BannerCard';
//max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-12 lg:py-16
const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <BannerCard></BannerCard>
      </div>
    );
};

export default Home;