import React from 'react'
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer"
import backIcon from '../assets/image/back.png'
import { Link, useParams } from 'react-router-dom'



const Payment = (props) => {
  const {id} = useParams()
 
  return (
    <>
      <Navbar />
      <h1>
        <Link to={`/${id}`}>
          <img src={backIcon} alt="" className="backIcon" /> 
        </Link>
        
        
        Complete Payment
      </h1>
      <div className="pay-form">
        <h4>
          <b>Choose payment method</b>
        </h4>
        <div className="mpesa-visa-btn">
          <div>
            <button className="mpesa-visa-btn-display">MPESA</button>
          </div>
          <div>
            <button className="mpesa-visa-btn-display">VISA/Mastercard</button>
          </div>
        </div>
        <label htmlFor="phone" className="pay-form-label">
          Enter Phone(required)
        </label>
        <input type="tel" placeholder="07xxxxxxxx" className="pay-form-input" />
        <div>
          <label htmlFor="email" className="pay-form-label">
            Enter email address(required)
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="pay-form-input"
          />
        </div>
        <br />
        <button className="btn btn-pay btn-danger">Continue</button>
      </div>

      <Footer />
    </>
  );
}

export default Payment 