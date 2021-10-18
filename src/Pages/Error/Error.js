import React from 'react';
import { Link } from 'react-router-dom';
import  pic from  "../../images/error-404-concept-landing-page_52683-12757.jpg"
import './Error.css'
const Error = () => {
    return (
        <div className="error">
            <img src={pic} alt="" />
           <Link to = "/"><button className="btn-warning">Go back</button></Link>
        </div>
    );
};

export default Error;