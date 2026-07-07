import React from 'react';
import { Link } from 'react-router';
import appError from '../assets/App-Error.png'

const AppsNotFound = ({onBack}) => {
    return (
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-center py-8">
          <img className="w-96 h-82" src={appError} alt="" />
        </div>
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-[#001931] font-bold text-4xl">
            OPPS!! APP NOT FOUND{" "}
          </h1>
          <p className="text-xl text-[#627382] mb-6">
            The app you are looking for was not found in our system. Please try
            searching for another app.
          </p>
          <Link to={"/apps"} onClick={onBack} className="font-bold">
            <span className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
              Go Back
            </span>
          </Link>
        </div>
      </div>
    );
};

export default AppsNotFound;