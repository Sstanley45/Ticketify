import React from "react";
import Logo from "./Logo";
import eventlogo from "../../src/assets/image/event.png";
import airtimelogo from "../../src/assets/image/airtime.png";
import tokenlogo from "../../src/assets/image/token.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Logo />
        <div className="eventiconsdiv">
          <div className="eachicon">
            <img className="eventicons" src={eventlogo} alt="" />{" "}
            <p className="icontext">Events</p>
          </div>
          <div className="eachicon">
            <img className="eventicons" src={airtimelogo} alt="" />
            <p className="icontext"> Airtime</p>
          </div>
          <div className="eachicon">
            <img className="eventicons" src={tokenlogo} alt="" />
            <p className="icontext">Token</p>
          </div>
        </div>

        <Link to="/auth/signup">
          <button class="btn btn-danger m-3">Sign up/Login</button>
        </Link>
      </div>
    </>
  );
};


export default Navbar;
