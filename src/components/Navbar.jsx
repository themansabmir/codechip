import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import '../App.css'
const Navbar = () => {
  const { isMobile, isDesktop, isTab } = useMediaQuery();

  const [isShow, setShow] = useState("");
  return (
    <div>
      {(isDesktop || isTab) && (
        <nav className='w-full flex items-center'>
                  <h1 className="logo text-3xl font-bold "> {`<CODECHIP />`}</h1>
                  <div className="flex-1"></div>
          <ul className='flex text-gray-500 gap-5 uppercase text-xl'>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}

      {isMobile && (
        <div>
          <ul className='flex flex-col float-right items-start'>
            {isShow && (
              <>
                <VscClose onClick={() => setShow(false)} />
                <li>Service</li>
                <li>Portfolio</li>
                <li>About</li>
                <li> Contact Us</li>
              </>
            )}
            {!isShow && <RxHamburgerMenu onClick={() => setShow(true)} />}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
