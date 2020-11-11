import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className="table table-borderless">
          <thead>
             <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Email</th>
             </tr>
          </thead>
        <tbody>
                <tr>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsam.</td>
                    <td>Aliquam totam quis ad tempora officia rerum ipsum quibusdam maiores.</td>
                    <td>Fuga facere dolorum magni nostrum odio non veniam, enim et.</td>
                    <td>Quod numquam, asperiores praesentium minima nesciunt quam obcaecati distinctio nostrum.</td>
                </tr>
                {/* {
                  appointments.map((appointment, index) => 
                        
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                } */}
            </tbody>
        </table>
    );
};

export default AppointmentShortList;