

import { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import App from "../Components/App";
import AppsNotFound from "./AppsNotFound";
import AppsLoading from "../Components/AppsLoading";

const Apps = () => {
  const { appData, loading } = useApps();

  const [search, setSearch] = useState("");
  const [searchedApp, setSearchedApp] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      const term = search.toLowerCase().replace(/\s+/g, "");
      const filteredApps = term
        ? appData.filter((app) =>
            app.title.toLowerCase().replace(/\s+/g, "").includes(term),
          )
        : appData;
      setSearchedApp(filteredApps);
      setSearchLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, appData]);

  if (loading) {
    return <AppsLoading count={searchedApp.length} />;
  }

  return (
    <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-[#001931] font-bold text-4xl">
          Our All Applications
        </h1>

        <p className="text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-4 justify-between items-center mb-6">
        <h4 className="font-semibold text-2xl text-[#001931]">
          ({searchedApp.length}) Apps Found
        </h4>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            placeholder="Search Apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {searchLoading ? (
        <AppsLoading count={8} />
      ) : searchedApp.length === 0 ? (
        <AppsNotFound onBack={() => setSearch("")} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedApp.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;