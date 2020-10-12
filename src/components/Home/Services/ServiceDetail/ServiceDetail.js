import React from 'react';
import "./ServiceDetail.css"
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img className="ServiceImages" style={{height:'50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, molestias?</p>
        </div>
    );
};

export default ServiceDetail;