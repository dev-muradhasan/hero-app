import React from 'react';
import Banner from '../Components/Banner';
import BannerCard from '../Components/BannerCard';
import AllApps from '../Components/AllApps';
import useApps from '../Hooks/useApps';
import PageLoading from '../Components/PageLoading';


//max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-12 lg:py-16


const Home = () => {
  const {appData,loading} = useApps();
  const slicedAppData = appData.slice(0,8)
  
    return (
      <div>
        {loading ? (
          <PageLoading></PageLoading>
        ) : (
          <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <AllApps slicedAppData={slicedAppData} loading={loading}></AllApps>
          </div>
        )}
      </div>
    );
};

export default Home;