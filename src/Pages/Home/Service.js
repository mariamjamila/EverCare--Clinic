import React from 'react';
import { Button } from 'react-bootstrap';
import "./Service.css"
const Service = ({service}) => {
    
  const {name, Specialization,image } = service;
    return (
        <div className="service">
       <img src={image} alt="" />
       <h4> {name}</h4>
       <h2>{Specialization}</h2>
       <Button variant="warning">Details</Button>
           
        </div>
    );
};

export default Service;