import React from "react";

const Signup = () => {
  return (
    <div className="signupf">
      <div className="Signupform"> </div>
      <div className="signupcontainer">
        <div className="signupblock">
          <div className="signuptitle">Get started</div>

          <form method="post" action="/auth/signup">
            <div className="signuplabel">Enter your phone number</div>
            <input
              type="tel"
              className="signupinput"
              placeholder="Phone number"
              required
            />
            <button type="submit" className="signupbtn">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
