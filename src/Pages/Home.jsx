import React from 'react';
import Banner from '../Components/Banner';
import BannerCard from '../Components/BannerCard';
import AllApps from '../Components/AllApps';
import useApps from '../Hooks/useApps';


//max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-12 lg:py-16


const Home = () => {
  const {appData} = useApps();
  const slicedAppData = appData.slice(0,8)
  
    return (
      <div>
        <Banner></Banner>
        <BannerCard></BannerCard>
        <AllApps slicedAppData={slicedAppData}></AllApps>
      </div>
    );
};

export default Home;