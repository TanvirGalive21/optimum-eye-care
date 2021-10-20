import React from 'react';
import './Footer.css'
// import WhiteLogo from '../../Images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1 className="text-info">Optimum Eye Care</h1>
                <p className="mt-4 ">
                  <small>
                    *Eye Care Specialist Services That You Can Trust. We Are Caring For Your Eye Health Hospital
                  </small>
                </p>

                <p className="mt-5">
                  <small>Tanvir © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container text-info">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Sports</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3 className="text-info">Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                  <i class="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h5>+ 04485 655 445</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      1200 Dhaka, Bangladesh,
                      <br /> 102 1st Avenue, Bonani
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;