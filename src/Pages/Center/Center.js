import React from 'react';
import "./Center.css"
const Center = ({center}) => {
const{name, img,description } = center
    return (
       
        <div className=" col-lg-4 col-md-6 col-sm-12">
                 <div className="care">
                 <img className='img-fluid' src={img} alt="" />
                 <h3>{name}</h3>
                <p className="">{description}</p>
                 </div>
        </div>
        
    );
};

export default Center;