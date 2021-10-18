import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer  fixed"  >
           
            <div className="row">
                <div className="col-md-4">
              <h4>Contact Us</h4>
                </div>
                <div className="col-md-4">
                   <h4>Emergency Contact</h4> 
                </div>
                <div className="col-md-4">
                    <h4> Subscribe </h4>
                    <input type="email" name="" id=""placeholder="email" />
                </div>
            </div>

        </div>
    );
};

export default Footer;