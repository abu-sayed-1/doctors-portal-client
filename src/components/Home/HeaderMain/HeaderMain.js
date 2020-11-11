import React from 'react';
import chair from "../../../images/chair.png";
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}> Your New Smile <br /><span style={{ color: 'yellow' }}>Starts Here</span></h1>
                  <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum aliquam ea, labore dignissimos cumque.</p>
                    <button className="btn_brand"> GET APPOINTMENT</button>
                     </div>
                       <div className="col-md-6">
                         <img src={chair} alt="" className="img-fluid" />
                  </div>
              </main>
    );
};

export default HeaderMain;