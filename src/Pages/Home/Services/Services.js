import React, { useEffect, useState } from 'react';
import Service from '../Service';
import './Services.css'
const Services = () => {
    const[services, setServices] = useState([]);

    useEffect(()=>{
        fetch("./services.json")
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
   console.log(services);
    return (
        <div id="services" className="service-container">
            {
                services?.map(service=><Service
                   key= {service.id}
                   service = {service}
                ></Service>)
            }
        </div>
    );
};

export default Services;