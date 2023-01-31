import React from 'react'
import eventlogo from "../../src/assets/image/event.png";
import airtimelogo from "../../src/assets/image/airtime.png";


const SmallScreenBanner = () => {
    return (
      <>
        <div className="smallScreenBanner">
          <div className="eachicon-banner">
            <img className="eventicons-banner" src={eventlogo} alt="" />{" "}
            <p className="icontext-banner">Events</p>
          </div>
          <div className="eachicon-banner">
            <img className="eventicons-banner" src={airtimelogo} alt="" />
            <p className="icontext-banner"> Airtime</p>
          </div>
        </div>
      </>
    );
}

export default SmallScreenBanner;