import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { updateList } from "../Utils/LocalStorage";

const AppDetails1st = ({ singleApp }) => {
  const {
    image,
    title,
    category,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
  } = singleApp;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 ">
      <div className="w-80 h-80 bg-white p-5">
        <img className="w-full" src={image} alt={title} />
      </div>

      <div className="flex-1">
        <h3 className="text-[#001931] font-bold text-3xl text-center lg:text-left">
          {title}: {category}
        </h3>
        <h4 className="text-xl font-medium mt-2 text-center lg:text-left">
          <span className="text-[#627382]">Developed By</span>{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {companyName}
          </span>
        </h4>
        <hr className="border border-[#001931]/20 block my-7" />
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex items-center lg:items-start flex-col gap-2">
            <MdOutlineFileDownload className="text-[#00D390] w-10 h-10" />
            <span className="text-[#001931]/80">Downloads</span>
            <span className="text-[#001931] text-4xl font-extrabold">
              {downloads >= 10 ? `${downloads}M+` : `${downloads}B+`}
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <FaStar className="text-[#FF8811] w-10 h-10" />
            <span className="text-[#001931]/80">Average Ratings</span>
            <span className="text-[#001931] text-4xl font-extrabold">
              {ratingAvg}
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2">
            <img
              className="w-10 h-10"
              src="/src/assets/icon-review.png"
              alt="review icon"
            />
            <span className="text-[#001931]/80">Total Reviews</span>
            <span className="text-[#001931] text-4xl font-extrabold">
              {reviews >= 100 ? `${reviews}K+` : `${reviews}M+`}
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <button
            onClick={() => updateList(singleApp)}
            className="btn text-white text-xl font-semibold mt-7 bg-[#00D390]"
          >
            Install Now ({size}MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails1st;
