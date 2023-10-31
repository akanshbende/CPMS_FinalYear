// import React from "react";

function MarqueeComp({ img }) {
  return (
    <>
      <img
        src={img}
        alt=""
        className="object-cover"
        width={200}
        height={200}
        style={{
          marginRight: "4rem",
        }}
      />
    </>
  );
}

export default MarqueeComp;
