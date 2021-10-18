import React from 'react';
import Centers from '../../Centers/Centers';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
         <Header></Header>
          <Banner></Banner>  
          <Services></Services>
          <Centers></Centers> 
        </div>
    );
};

export default Home;