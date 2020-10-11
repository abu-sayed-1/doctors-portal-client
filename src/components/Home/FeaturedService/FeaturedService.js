import React from 'react';
import baby from "../../../images/Mask Group 3.png"
const FeaturedService = () => {
    return (
        <section>
        <div className="d-flex">
                <div  className="col-md-6 justify-content-center">
                  <img style={{height:'50%'}} src={baby} alt="" className="img-fluid pr-2"/>
                </div>
                <div className="col-md-6">
                    <h5>Exceptional Dental <br/> Care,on Your Terms</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem omnis eos natus blanditiis quibusdam alias vero fugiat quam harum labore temporibus voluptatem, mollitia culpa consectetur laboriosam unde iste officiis, ea aut quos neque a. Illum reiciendis vitae pariatur incidunt aspernatur non et est laboriosam nobis ipsum adipisci, impedit esse fugit quidem blanditiis corrupti nostrum eaque unde itaque dolore delectus eum?</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;