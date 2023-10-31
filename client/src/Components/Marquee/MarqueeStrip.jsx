// import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeComp from "./MarqueeComp";
function MarqueeStrip() {
  const marqueeData = [
    {
      imgSrc:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-d@2x.png",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Dassault_Syst%C3%A8mes_logo.svg/2560px-Dassault_Syst%C3%A8mes_logo.svg.png",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Principal_Financial_Group_logo.svg/1280px-Principal_Financial_Group_logo.svg.png",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXtxTmtQBylMAzd-F1QhkHHqe04g25w4Ec26d8Sv4&s",
    },
    {
      imgSrc:
        "https://companieslogo.com/img/orig/TCS.NS_BIG-89c50e39.png?t=1631949260",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png",
    },
  ];
  return (
    <>
      <Marquee>
        {marqueeData &&
          marqueeData.map((item, index) => {
            return <MarqueeComp key={index} img={item?.imgSrc} />;
          })}
      </Marquee>
    </>
  );
}

export default MarqueeStrip;
