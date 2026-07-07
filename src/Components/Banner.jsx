import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="space-y-10 max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
      <div className="text-center space-y-5">
        <h1 className="text-[#001931] font-bold text-4xl md:text-5xl lg:text-6xl">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden lg:block" /> Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <Link
            to={"https://play.google.com/store/apps"}
            className="inline-flex w-fit font-semibold text-xl btn bg-white"
          >
            <img
              className="w-8 h-8"
              src="/src/assets/icons8-google-play-store-96.png"
              alt=""
            />{" "}
            Google Play
          </Link>
          <Link
            to={"https://apps.apple.com/us/iphone/today"}
            className="inline-flex w-fit font-semibold text-xl btn bg-white"
          >
            <img
              className="w-8 h-8"
              src="/src/assets/icons8-app-store-96.png"
              alt=""
            />
            App Store
          </Link>
        </div>
      </div>
      <div>
        <img
          className="w-2xl block mx-auto"
          src="/src/assets/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
