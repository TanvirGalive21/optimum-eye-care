import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Specialists></Specialists>
        </div>
    );
};

export default Home;