import React from 'react';

const Center = ({center}) => {
const{name, img,description } = center
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
           <img src={img} alt="" />
           <h3>{name}</h3>
           <p className="">{description}</p>
        </div>
    );
};

export default Center;