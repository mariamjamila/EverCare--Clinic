import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import  './Home.css'

function Home() {
    return (
        <div>
          <Header></Header>
          <Banner></Banner>
            <h2>Welcome Home</h2>
        </div>
    );
}

export default Home;