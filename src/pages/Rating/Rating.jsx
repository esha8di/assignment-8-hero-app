import React from "react";

const Rating = () => {
  return (
    <div className="text-center bg-purple-600 text-white rounded-t-4xl md:rounded-t-[0px]">
        <p className="font-bold text-2xl p-6">Trusted by Millions, Built for You</p>

        <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title text-gray-300">Total Downloads</div>
          <div className="stat-value">29.6M</div>
          <div className="stat-desc text-gray-300">21% More Than Last Month</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title text-gray-300">Total Reviews</div>
          <div className="stat-value">906K</div>
          <div className="stat-desc text-gray-300">46% More Than Last Month</div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title text-gray-300">Active Apps</div>
          <div className="stat-value">132+</div>
          <div className="stat-desc text-gray-300">31 More Will Launch</div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Rating;
