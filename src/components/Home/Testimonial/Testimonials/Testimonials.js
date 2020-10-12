import React from 'react';

const Testimonials = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        // <section>
        //     <div className="container">
        //         <div className="col-md-4">
        //             <div>
        //                 <p>{testimonial.quote}</p>
        //             </div>
        //             {/* <div className="d-flex">
        //              <div>rakivkjdks</div>
        //              <div>rakib khan</div>
        //             </div> */}
        //         </div>
        //     </div>
        // </section>


        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div className='ml-3'>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;