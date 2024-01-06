import React from "react";
import { useNavigate } from "react-router-dom";
import btnArrow  from '../assets/btnArrow.png'

export const ServiceCard = ({ icon, cardTitle, cardDescription, url }) => {

  const navigate  = useNavigate()
  return (
    <div className='flex flex-col hover:scale-95 items-center gap-4 border-2 px-2 py-4 rounded cursor-pointer hover:shadow-md transition-all duration-500 hover:shadow-[#494949] border-[#1f1f1f]'>
      <div>
        <img src={icon} alt={icon} />
      </div>
      <h1 className="text-xl text-white font-semibold">{cardTitle}</h1>
      <p className="text-[#8c8c8c] text-center">{cardDescription}</p>
      {url ? <button
className="text-white border-2 hover:text-[#1a1a1a] font-semibold flex gap-2 border-[#1f1f1f] px-6 rounded-full hover:bg-secondaryColor transition-all duration-700 py-2"
        type="button" onClick={() => navigate(`${url}`)}>Learn More <img src={btnArrow} alt="" className=" rounded-full bg-[#1a1a1a]" /></button> : null}
    </div>
  );
};
