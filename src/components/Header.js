import React, { useState } from "react";
import Input from "./Input";
import Results from "./Results";
import Dropdown from "./Dropdown";
import ipify from "../apis/ipify";

const testIP = ["102.91.5.115", "192.67.904.99", "172.217.22.14"];

const Header = () => {
  const [fetchedData, setFetchedData] = useState({});

  const fetchData = async (term) => {
    try {
      const ipData = await ipify.get("", {
        params: {
          ipAddress: term,
        },
      });
      const returnedData = ipData.data;
      setFetchedData(returnedData);
    
    } catch (error) {
      alert(`${error}`);
    }

    // console.log(fetchData)
  };

  return (
    <>
      <header className="flex pt-8 flex-col items-center bg-heropattern h-64 px-6  md:h-70 w-full bg-no-repeat bg-cover relative">
        <h1 className="text-white font-bold text-2xl sm:text-3xl xl:text-5xl pb-6 tracking-wide mt-5 ">
          IP Address Tracker
        </h1>
        {}
        <Dropdown testIP={testIP} randomIp="randomIP" />
        <Input
          placeholder="Search for any IP address or domain"
          onSearch={fetchData}
         
        />
        <Results/>
      </header>
    </>
  );
};

export default Header;
