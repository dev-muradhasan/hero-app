import React, { useState } from "react";
import { loadAppsList, removeFromAppList } from "../Utils/LocalStorage";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Installation = () => {
  const [appList, setAppList] = useState(() => loadAppsList());
  const [sortOrder, setSortOrder] = useState('none')

  if(!appList.length) return (
    <div>
      <p className="ax-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12 text-[#001931]/80 font-semibold text-2xl text-center">
        No apps found <br /> Please, Install an App.
      </p>
      <div className="flex justify-center mt-10">
        <Link
          to={"/apps"}
          className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-10 hover:scale-102 transition ease-in-out"
        >
          All Apps
        </Link>
      </div>
    </div>
  );

  const handleRemove =(id)=>{
    removeFromAppList(id);
    setAppList((pre) => pre.filter((p) => p.id !== id));
  } 

   const sortedItem = (() => {
     if (sortOrder === "size-asc") {
       return [...appList].sort((a, b) => a.size - b.size);
     } else if (sortOrder === "rating-dasc") {
       return [...appList].sort((a, b) => b.ratingAvg - a.ratingAvg);
     } else {
       return appList;
     }
   })();

  return (
    <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-[#001931] font-bold text-4xl">
          Your Installed Apps
        </h1>
        <p className="text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between items-center mb-4">
        <h4 className="font-semibold text-2xl text-[#001931]">
          {appList.length} Apps Found
        </h4>
        <label className="form-control w-full max-w-xs">
          <select className="select select-border" value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
            <option value="none">Sort</option>
            <option value="size-asc">Sort By Size</option>
            <option value="rating-dasc">Sort By Ratings</option>
          </select>
        </label>
      </div>
      <div>
        {sortedItem.map((app) => (
          <div
            key={app.id}
            className="flex flex-col md:flex-row justify-between items-center gap-5 bg-white mb-6 p-4 rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 border border-gray-300 rounded-lg bg-base-200 p-3">
                <img src={app.image} alt={app.title} />
              </div>
              <div className="space-y-3.5">
                <h2 className="font-medium text-xl text-[#001931]">
                  {app.title}: {app.category}
                </h2>
                <div className="flex items-center gap-5">
                  <p className="flex items-center gap-1 font-medium text-[#00D390]">
                    <MdOutlineFileDownload className="w-5 h-5" />
                    <span>
                      {app.downloads >= 10
                        ? `${app.downloads}M+`
                        : `${app.downloads}B+`}
                    </span>
                  </p>
                  <p className="flex items-center gap-1.5 text-[#FF8811] font-medium">
                    <FaStar></FaStar>
                    <span>{app.ratingAvg}</span>
                  </p>
                  <p className="text-[#627382] font-medium">{app.size} MB</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(app.id)}
                className="btn bg-[#00D390] text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
