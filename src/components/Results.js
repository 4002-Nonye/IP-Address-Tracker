import React, { useState } from "react";

const Results = () => {
  
  const [ipAddress, setIpAddress] = useState("192.67.904.99");
  const [location, setLocation] = useState("Brooklyn, NY 10001");
  const [timeZone, setTimeZone] = useState("UTC -5:00");
  const [isp, setISP] = useState("SpaceX Starlink");
 
  return (
    <div className="bg-white p-5 py-8 lg:py-0 z-10 w-9/12 lg:h-3/4 flex flex-col lg:flex-row rounded-lg text-center justify-between absolute top-48 md:top-52 drop-shadow-2xl items-center">
      <div className="container ">
        <h3 className="card">IP ADDRESS</h3>
        <p className="p">{ipAddress}</p>
      </div>
      <div className="container">
        <h3 className="card">Location</h3>
        <p className="p">{location}</p>
      </div>
      <div className="container">
        <h3 className="card">time zone</h3>
        <p className="p">{timeZone}</p>
      </div>
      <div className="container border-none">
        <h3 className="card">isp</h3>
        <p className="p">{isp}</p>
      </div>
    </div>
  );
};

export default Results;
