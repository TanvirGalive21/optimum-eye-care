import React from 'react';

const Specialist = ({specialist}) => {
    const {name, img, expertize} = specialist;
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="specialist card">
                        <img className="rounded img-fluid" src={img} alt="" />
                        <div className="p-3 text-info">
                            <h3>{name}</h3>
                            <p className="">{expertize}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Specialist;