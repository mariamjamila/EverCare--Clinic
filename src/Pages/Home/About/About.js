import React from 'react';
import  pic from '../.././../images/baby-care.jpg'
import "./About.css"
const About = () => {
    return (
        <div className="about">
                <div>
                     <h2>ABOUT US</h2>
                     <p>At EVER CARE MEDICAL, we provide our patients with access to state-of-the-art facilities along with the most experienced and dedicated healthcare professionals. In 2020, TRUE HEALTH MEDICAL opened its doors to patients in the city of New York. Since then, our mission has been to provide quality care in a safe environment — earning us a reputation as the best Medical Center in the area.
From PRIMARY CARE to Full OBSTETRICS AND GYNECOLOGY Medical and Surgical treatments, our personalized services allow us to manage whatever health concern our patients might have. Book an appointment today and see what we can do for you or your loved ones.</p>

                </div>
                <div>
                    <img src={pic} alt="" />

                </div>

            
        </div>
    );
};

export default About;