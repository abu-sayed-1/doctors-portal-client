import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonial />
            <Blogs />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;