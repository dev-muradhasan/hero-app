import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const App = ({app}) => {
    const { title, category, ratingAvg, downloads, image,id } = app;
    
    return (
      <Link to={`/appDetails/${id}`} className="card bg-white shadow-sm hover:scale-105 transition ease-in-out">
        <figure
          className={`w-40 h-40 mt-7 block mx-auto ${id === 16 ? "bg-linear-to-r from-[#04BDCF] via-[#5253ec] to-[#7d2ae7]  rounded-full" : ""}`}
        >
          <img
            className="w-full"
            src={id===23? '/src/assets/pngwing.com (2).png': image}
            alt={title}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#001931] line-clamp-1">
            {title}: <span>{category}</span>
          </h2>
          <div className="flex flex-row justify-between mt-2">
            <h4 className="flex items-center gap-1.5 bg-[#F1F5E8] text-[#00D390] font-medium rounded-sm px-2 py-1">
              <MdOutlineFileDownload className="text-lg" />{" "}
              {downloads >= 10 ? `${downloads}M+` : `${downloads}B+`}
            </h4>
            <h4 className="flex items-center gap-1.5 bg-[#FFF0E1] text-[#FF8811] font-medium rounded-sm px-2 py-1">
              {ratingAvg} <FaStar />
            </h4>
          </div>
        </div>
      </Link>
    );
};

export default App;