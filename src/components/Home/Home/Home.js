import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Header></Header>
             <Services></Services>
             <FeaturedService></FeaturedService>
        </div>
    );
};

export default Home;