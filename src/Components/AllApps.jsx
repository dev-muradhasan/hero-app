
import App from './App';
import { Link } from 'react-router';

const AllApps = ({ slicedAppData }) => {
  return (
    <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
      <div className="text-center space-y-3">
        <h1 className="text-[#001931] font-bold text-4xl">Trending Apps</h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        { slicedAppData.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to={"/apps"}
          className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-10 hover:scale-102 transition ease-in-out"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default AllApps;