import React, { useState } from "react";

const Results = ({fetchedData}) => {
  // console.log(fetchedData.location.timezone)
  const [ipAddress, setIpAddress] = useState("192.67.904.99");
  const [location, setLocation] = useState("Brooklyn, NY 10001");
  const [timeZone, setTimeZone] = useState("UTC -5:00");
  const [isp, setISP] = useState("SpaceX Starlink");
//  const res =fetchedData.map((data)=>{
  //<div></div>

//  })
  return (
    <div className="bg-white p-5 py-8 lg:py-0 z-10 w-9/12 lg:h-3/4 flex flex-col lg:flex-row rounded-lg text-center justify-between absolute top-48 md:top-52 drop-shadow-2xl items-center">
      <div className="container ">
        <h3 className="card">IP ADDRESS</h3>
        <p className="p">{fetchedData.ip}</p>
      </div>
      <div className="container">
        <h3 className="card">Location</h3>
          <p className="p">{fetchedData.location.region}, {fetchedData.location.country} {fetchedData.location.geonameId}</p>
      </div>
      <div className="container">
        <h3 className="card">time zone</h3>
        <p className="p">UTC {fetchedData.location.timezone}</p>
      </div>
      <div className="container border-none">
        <h3 className="card">isp</h3>
        <p className="p">{fetchedData.isp}</p>
      </div>
    </div>
  );
};

export default Results;
