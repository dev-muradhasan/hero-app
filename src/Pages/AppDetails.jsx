import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import AppDetails1st from "../Components/AppDetails1st";
import AppDetailsChart from "../Components/AppDetailsChart";
import PageLoading from "../Components/PageLoading";

const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useApps();
  const singleApp = appData.find((app) => String(app.id) === id);
  if (loading) return <PageLoading></PageLoading>;

  return (
    <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
      <AppDetails1st singleApp={singleApp}></AppDetails1st>
      <hr className="border border-[#001931]/20 my-10" />
      <AppDetailsChart singleApp={singleApp}></AppDetailsChart>
      <hr className="border border-[#001931]/20 my-10" />
      <div>
        <h4 className="font-semibold text-2xl text-[#001931] mb-5">
          Description
        </h4>
        <p className="text-[#627382] text-xl">{singleApp.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
