import React, { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    setIsTab(
      window.matchMedia("(min-width: 601px) and (max-width: 1024px)").matches
    );
    setIsDesktop(window.matchMedia("(min-width: 1025px)").matches);
  };

  useEffect(() => {
    // Initial check
    handleResize();

    // Add listener for future changes
    window.addEventListener("resize", handleResize);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isMobile, isTab, isDesktop };
};

export default useMediaQuery;
