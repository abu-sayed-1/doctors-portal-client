import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';


const Home = () => {
    return (
        <div>
             <Header></Header>
             <Services></Services>
             <FeaturedService></FeaturedService>
             <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;