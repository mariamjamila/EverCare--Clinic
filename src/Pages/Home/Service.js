import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"
const Service = ({service}) => {
    
  const { id, name, Specialization,image } = service;
    return (
        <div className="service">
       <img src={image} alt="" />
       <h4> {name}</h4>
       <h2>{Specialization}</h2>
      <Link to={`/booking/${id}`}>
      <Button variant="warning">Book{name.toLowerCase()}</Button>
      </Link>
           
        </div>
    );
};

export default Service;