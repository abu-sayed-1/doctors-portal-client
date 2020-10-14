import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AppointmentDataTable = () => {
const [appointmentAllData, setAppointmentData] = useState([])
console.log(appointmentAllData);
//   const {appointmentDataTable, setAppointmentDataTable} = useContext(UserContext)
  useEffect(() => {
      fetch('http://localhost:5000/appointmentAllData')
      .then(res => res.json())
      .then(data => setAppointmentData(data))
  }, [])

    return (
    <section>
        <div className="row">
           <div className="col-md-2">
           <Sidebar></Sidebar>
           </div>
        <table className="table table-borderless col-md-10">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Gender</th>
            <th className="text-secondary" scope="col">Age</th>
            <th className="text-secondary" scope="col">Weight</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              appointmentAllData.map((appointment, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{appointment.name}</td>
                    <td>{appointment.gender}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.weight}KG</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
        </div>
    </section>
    );
};

export default AppointmentDataTable;