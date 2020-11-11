import React, { useState } from 'react';
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

    // const [ input, setInput] = useState(null);
    // console.log(input);

    // const handelP = e => {
    //     const dataId = e.target.value;
    //     setInput(dataId)
    // }


    // fetch('http://localhost:5000/addProduct',{
    //     method: 'POST',
    //     headers:{'content-type': 'application/json'},
    //     body:JSON.stringify(input)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));
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
            {/* <div>
                <form action="">
                    <input  onBlur={handelP}  type="text" />
                </form>
            </div> */}



        </div>
    );
};

export default Home;