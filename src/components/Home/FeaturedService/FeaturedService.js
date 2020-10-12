import React from 'react';
import featured from "../../../images/Mask Group 3.png"
const FeaturedService = () => {
  return (
    // <section style={{height:'600px'}} className="mt-5 pt-5">
    // <div className="d-flex justify-content-center">
    //         <div className="col-md-4">
    //           <img style={{height:'50%'}} src={baby} alt="" className="img-fluid pr-2"/>
    //         </div>

    //         <div className="col-md-6 mt-5 ">
    //             <h5>Exceptional Dental <br/> Care,on Your Terms</h5>
    //           <p className="w-75 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem omnis eos natus blanditiis quibusdam alias vero fugiat quam harum labore temporibus voluptatem, mollitia culpa consectetur laboriosam unde iste officiis, ea aut quos neque a. Illum reiciendis vitae pariatur incidunt aspernatur non et est laboriosam nobis ipsum adipisci, impedit esse fugit quidem blanditiis corrupti nostrum eaque unde itaque dolore delectus eum?</p>
    //           <button className="btn btn-info"> Learn more </button>

    //         </div>
    //     </div>
    // </section>


    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={featured} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>Exceptional Dental Care, on your Term</h1>
            <p className="text-secondary my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;