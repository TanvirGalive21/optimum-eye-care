import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, price, description, img} = service;

    return (
        <div className="service pb-3">
             <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
           <Link to={`/servicedetails/${id}`}>
                <Button > More Details <span><FontAwesomeIcon icon={faPlus} /></span></Button> 
           </Link>
        </div>
    );
};

export default Service;