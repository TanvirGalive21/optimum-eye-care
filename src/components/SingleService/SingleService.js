import React from 'react';


const SingleService = ({serviceDetail}) => {
    const {title, description, img } = serviceDetail;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;