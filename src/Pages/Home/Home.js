import React from 'react';
import Centers from '../Centers/Centers';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import  './Home.css'
import Service from './Service';
import Services from './Services/Services';

function Home() {
    return (
        <div id="home">
          
          <h2>Welcome To Ever Care</h2>
         <Services></Services>
           <Centers></Centers> 
        </div>
    );
}

export default Home;