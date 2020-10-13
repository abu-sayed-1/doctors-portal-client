import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
        //AppointmentHeader theke props hishave tar ze calendar er date ache oi ta theke date ta ke nitechi, eta amra Appointment e nichi ei korone zo Appointment e modde zothe component ache oigular modde date ta ke padano zay
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;