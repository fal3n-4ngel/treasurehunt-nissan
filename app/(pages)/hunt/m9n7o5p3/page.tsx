import React from "react";

function page() {
  return (
    <div className="min-h-screen flex flex-col w-full  text-black justify-center items-center p-5">
      <h1 className="md:text-[3vw] text-[6vw] rock-salt-regular underline p-5">
        Team 2 : Clue 3
      </h1>
      <h2 className="md:text-[3vw] text-[6vw] md:w-[80%] md:flex-row flex-col gap-8 mx-auto rock-salt-regular text-center w-full flex justify-between items-center ">
        <img src="/nissan.png" className="md:w-[30vw]"/>
        <img src="/leaf.jpg" className="md:w-[30vw]"/>
      </h2>
    </div>
  );
}

export default page;
