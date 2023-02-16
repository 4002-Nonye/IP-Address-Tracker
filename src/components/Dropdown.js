import React, { useState } from "react";

//THE DROPDOWN COMPONENT IS AN ADDITIONAL FEATURE OF MINE 
//I HAVE ADDED THIS COMPONENT FOR A BETTER USER EXPERIENCE ❤
const Dropdown = ({ testIP, randomIp }) => {
  const [open, setOpen] = useState(false);
  const [copy, setCopy] = useState("copy");
  const [ip, setIP] = useState("192.67.904.99");


  //I HAVE IMPLEMENTED A FEATURE TO GET RANDOM IP ADDRESS FOR A USER INCASE HE/SHE DOESN'T KNOW WHAT AN IP ADDRESS IS OR WHERE TO GET ONE
  const fetchRandomIP = () => {
    randomIp = Math.floor(Math.random() * testIP.length);
    setIP(testIP[randomIp]);
  };

  // A FUNCTION TO COPY RANDOM IP ADDRESS TO CLIPBOARD
  const copyToClipboard = () => {
    navigator.clipboard.writeText(ip);
    setCopy("copied");
    setTimeout(() => {
      setCopy("copy");
    }, 1500);
  };

  //RETURN JSX FOR DROPDOWN
  return (
    <div className="hidden xl:flex">
      <div className="flex text-center flex-col absolute left-3.5 top-4 p-3 rounded-md bg-white drop-shadow-md cursor-pointer w-2/12 ">
        <p
          className="text-black text-xl relative"
          onClick={() => {
            fetchRandomIP();

            setOpen(!open);
          }}
        >
          Click to get test address
        </p>
        {/* DATA */}
      </div>
      <div className={open ? "popup" : "popup hidden"}>
        <div className="test-data ">
          <div>
            <p className="data">{ip}</p>
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer gap-1"
            onClick={copyToClipboard}
          >
            <svg
              className="svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              ></path>
            </svg>
            <p className="cursor-pointer text-xs">{copy} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
