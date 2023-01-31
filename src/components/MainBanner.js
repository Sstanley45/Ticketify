import React from 'react'
import bannerImg from "../src/../assets/image/advbanner.jpg";

const MainBanner = () => {
  return (
    <>
      <div className='mainbanner'>
        <img className="MainbannerImg" src={bannerImg} alt="" />
      </div>
    </>
  );
}

export default MainBanner 