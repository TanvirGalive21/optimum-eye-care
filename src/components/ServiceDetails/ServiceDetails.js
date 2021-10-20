import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Shared/Footer/Footer';
import SingleService from '../SingleService/SingleService';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
  
    
    //data load
    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data.service))
    }, []);

    // useEffect( () => {
    //     const foundDetail = serviceDetails.find(
    //         (service) => service.id === id
    //     );
    //         console.log(foundDetail);
    // }, [serviceDetails]);

    
    return (
        <div>
            <h2 className="text-center text-info">Service Details</h2>
            <div className="container">
                <div className="row">
                    {
                        serviceDetails.map(serviceDetail => <SingleService
                            key = {serviceDetail.id }
                            serviceDetail = {serviceDetail }
                        ></SingleService>)
                    }
                </div>
            
            </div>
            <Footer></Footer> 
        </div>
    );
};

export default ServiceDetails;