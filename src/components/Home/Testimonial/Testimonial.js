import React from 'react';
import harry from "../../../images/Ellipse 1.png"
import Testimonials from './Testimonials/Testimonials';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit labore fugiat cupiditate eligendi voluptas corrupti minus earum quibusdam! Asperiores nisi enim odit molestias explicabo adipisci recusandae aperiam magni quia aspernatur',
        name: 'Wilson harry',
        from: 'California',
        img: harry
    },
    {
        quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit labore fugiat cupiditate eligendi voluptas corrupti minus earum quibusdam! Asperiores nisi enim odit molestias explicabo adipisci recusandae aperiam magni quia aspernatur',
        name: 'Wilson harry',
        from: 'California',
        img: harry
    },
    {
        quote: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit labore fugiat cupiditate eligendi voluptas corrupti minus earum quibusdam! Asperiores nisi enim odit molestias explicabo adipisci recusandae aperiam magni quia aspernatur',
        name: 'Wilson harry',
        from: 'California',
        img: harry
    },
]

const Testimonial = () => {
    return (
        <section className="testimonial my-5 py-5">
        <div className="container">
            <div className="section-header text-center">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     testimonialData.map(testimonial => <Testimonials testimonial={testimonial} key={testimonial.name}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonial;