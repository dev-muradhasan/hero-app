import React from 'react';

const BannerCard = () => {
    return (
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 md:px-8 lg:px-12 py-16 space-y-12">
        <h1 className="font-bold text-3xl lg:text-4xl text-center">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-28">
          <div className="space-y-3 text-center">
            <p>Total Downloads</p>
            <h2 className="font-extrabold text-5xl lg:text-6xl">29.6M</h2>
            <p>21% more than last month</p>
          </div>
          <div className="space-y-3 text-center">
            <p>Total Reviews</p>
            <h2 className="font-extrabold text-5xl lg:text-6xl">906K</h2>
            <p>46% more than last month</p>
          </div>
          <div className="space-y-3 text-center">
            <p>Active Apps</p>
            <h2 className="font-extrabold text-5xl lg:text-6xl">132+</h2>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    );
};

export default BannerCard;