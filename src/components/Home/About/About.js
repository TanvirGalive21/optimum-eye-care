import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div id="about">
             <div className="fullwidth-boxes-area">
            <div className="container m-5 p-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6 p-2">      
                        <div className="promo-boxes-wraper">
                            <div className="single-promo-box">
                                <div className="promo-box-tablecell">
                                    <i className="promo-icon flaticon-cardiogram"></i>
                                    <h2>Retina Repair</h2>
                                    <Link href="" className="boxed-btn">Book Now</Link>
                                </div>
                            </div>
                            <div className="single-promo-box">
                                <div className="promo-box-tablecell">
                                    <i className="promo-icon flaticon-dna"></i>
                                    <h2>Glaucoma & Cornea </h2>
                                    <Link href="" className="boxed-btn">Book Now</Link>
                                </div>
                            </div>
                            <div className="single-promo-box">
                                <div className="promo-box-tablecell">
                                    <i className="promo-icon flaticon-first-aid-kit"></i>
                                    <h2>Laser Surgery </h2>
                                    <Link href="" className="boxed-btn m-3">Book Now</Link>
                                </div>
                            </div>
                            <div className="single-promo-box">
                                <div className="promo-box-tablecell">
                                    <i className="promo-icon flaticon-ribbon"></i>
                                    <h2>Surgical Procedure</h2>
                                    <Link href="" className="boxed-btn">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 p-2">
                        <div className="right-side-content">
                            <div className="section-title">
                                <h3>About us</h3>
                                <h2>A few words about us</h2>
                            </div>
                              <h4> <b>Optimum Eye Care</b>first started from a rented 5 storied building at Dhanmondi Road No. 6</h4>
                              
                            <p>With the promise and commitment in eye care, Bangladesh Eye Hospital Ltd. is now serving from 9 branches located in Dhanmondi, Banani, Uttara, Chittagong, Shantinagar, Khulna, Zigatola, Mirpur  and a non-profit &ldquo </p>
                             <Button className="m-2" variant="outline-success">Learn More <span><FontAwesomeIcon icon={faPlus} /></span></Button>
                             <Button variant="outline-info">About Our Service</Button>
                        </div>
                       
                    </div>
                    <div>
                    
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;