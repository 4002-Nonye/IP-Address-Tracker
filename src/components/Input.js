import React, { useState } from "react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import Results from "./Results";

const Input = ({ placeholder, onSearch,fetchedData }) => {
  const [val, setVal] = useState('');
 
  

const onChange=(e)=>{
  setVal(e.target.value)

}

  return (
    <>
      <div className="flex w-full justify-center ">
        
        <input
          placeholder={placeholder}
          className="w-4/5 sm:w-5/12 border-none text-gray-200 caret-gray-200 outline-none p-4 text-lg py-2 sm:py-4 rounded-l-lg"
          onChange={onChange}
          value={val}
        />
        <button
          className="bg-gray-200 flex items-center p-4 px-5 rounded-r-lg text-center"
          onClick={()=>{
            if(val==='')return;
              //SUBMIT INPUT VAL AND GET DATA FROM IPIFY API
            onSearch(val)
            console.log(val)
           
            
           
           
          }}
        >
          <img src={arrowIcon} alt="arrow" />
        </button>
      </div>
    
    
    </>
  );
};

export default Input;
