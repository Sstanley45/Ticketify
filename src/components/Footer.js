import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import 'https://fonts.googleapis.com/css2?family= Quicksand:wght@300;400;500;600;700&display=swap';
import tokealogo from "../../src/assets/image/tokealogo.png";

const Footer = () => {
  return (
    //<div className="footer">
    <div class="container mt-5">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 border-top text-black ">
        <div class="col mb-5">
          <h>
            <img id="tokealogo" src={tokealogo} alt="" />
          </h>
          <p class="text-muted">&copy; 2023.TICKETIFY!</p>
          <p>All Rights Reserved.</p>
        </div>

        <div class="col mb-3 mt-5">
          <h>
            <b>Links</b>
          </h>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="1" class="nav-link p-0 text-muted">
                About Us
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="2" class="nav-link p-0 text-muted">
                Privacy Policy
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#3" class="nav-link p-0 text-muted">
                Terms and Condition{" "}
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#4" class="nav-link p-0 text-muted">
                Help Centre
              </a>
            </li>
          </ul>
        </div>

        <div class="col mb-3 mt-5">
          <h5>Connect with Us</h5>
          <ul class="nav col-md-3 justify-content-start list-unstyled d-flex flex-nowrap ">
            {/*Added the line "eslint-disable-next-line" below To ignore the warning ==> Anchors must have 
        content and the content must be accessible by a screen reader*/}

            {/* eslint-disable-next-line */}
            <li>
              <a href="https://facebook.com" class="fa fa-facebook"></a>
            </li>

            {/* eslint-disable-next-line */}
            <li>
              <a href="https://twitter.com/_goddy1" class="fa fa-twitter"></a>
            </li>

            {/* eslint-disable-next-line */}
            <li>
              <a
                href="https://instagram.com/gathog.o"
                class="fa fa-instagram"
              ></a>
            </li>
          </ul>
        </div>

        <div class="col mb-3 mt-5">
          <h5>contact us</h5>
          <ul class="nav flex-column">
            <li class="nav">
              <a href="0#" class="nav-link p-0 text-muted">
                Address: 4th Floor, TICKETIFY, Nairobi P.O.76738-00620,Nairobi
              </a>
            </li>
            <li class="nav">
              <b>
                <a href="1#" class="nav-link text-muted">
                  Telephone:<u>+254071234567890</u>
                </a>
              </b>
            </li>
            <li class="nav">
              <b>
                <a href="2#" class="nav-link  text-muted">
                  Email:<u>info@ticketify.com</u>
                </a>
              </b>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    //</div>
  );
};
export default Footer;
