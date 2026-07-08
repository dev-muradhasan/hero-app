import Banner from '../Components/Banner';
import BannerCard from '../Components/BannerCard';
import AllApps from '../Components/AllApps';
import useApps from '../Hooks/useApps';
import PageLoading from '../Components/PageLoading';



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