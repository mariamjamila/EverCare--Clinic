import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const[service, setService] = useState({});
    const {serviceId} = useParams();
    useEffect(()=>{
        fetch("/services.json")
        .then(res =>res.json())
        .then(data =>{
            const d = data.find(service => service.id === parseInt(serviceId));
            setService(d)})
    },{});

    
    console.log(service);
    const {name, email, image, Profile, Specialization} = service;
    return (    
        <div>
            <h2>This is booking : {serviceId}</h2>
                
            <img src={image} alt="" />
            <h2>{name}</h2>
            <b>{Specialization}</b>
            <h4>{email}</h4>
            <p>{Profile}</p>
            
        </div>
    );
};

export default Booking;