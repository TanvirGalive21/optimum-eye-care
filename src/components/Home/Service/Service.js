import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, img} = service;

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="service p-3">
                        <img className="rounded img-fluid" src={img} alt="" />
                         <h3>{name}</h3>
                         <p className="">{description}</p>
                        <Link to={`/servicedetails/:${id}`}>
                        <Button variant="info"> More Details <span><FontAwesomeIcon icon={faPlus} /></span></Button> 
                         </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;