import React from 'react';
  import pic1 from "./../../images/Nephrologist-Care-400x400.jpg"
  import pic2 from"./../../images/Facility-Optic-400x400.jpg"
  import pic3 from "./../../images/prenatal-care-400x400.jpg"
  import  pic4 from"./../../images/baby-care-event.jpg"
  import  pic5 from "./../../images/general health.jpg"
  import pic6 from  "./../../images/Important-Old-Care-300x209.jpg"
import Center from '../Center/Center';

const centers = [
    {
    img: pic1,
    name: "Nephrologist Care",
    description:"Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about you."
},
   
   
    {
    img: pic2,
    name: "Eye Care",
    description:"Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about you."
},
    {
    img: pic3,
    name: "Prenetal Care",
    description:"Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about you."
},
    {
    img: pic4,
    name: "Baby Care",
    description:"Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about you."
},
    {
    img: pic5,
    name: "General Health Care",
    description:"Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about you."
},
    {
    img: pic6,
    name: "Elderly Care",
    description:"Tell me why, I love you like I do. Tell me who, could stop my heart as much as you. Let’s take each other’s hand, as we jump into the final frontier. Mad about you baby, yeah, I’m mad about you."
}

];
const Centers = () => {
    return (
        <div id="centers">
            <h4>Our Services</h4>
            <div className="row">
           {
            centers.map(center=><Center
            key= {center.name}
            center= {center}
            ></Center>
                )
            
            }
            </div>

        </div>
    );
};

export default Centers;