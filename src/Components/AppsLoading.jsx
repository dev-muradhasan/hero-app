import React from 'react';

const AppsLoading = ({count}) => {
    return (
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-4 ">
            <div className="skeleton h-64 w-full"></div>
            <div className="skeleton h-6 w-full"></div>
            <div className='w-full flex justify-between gap-10'>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default AppsLoading;
