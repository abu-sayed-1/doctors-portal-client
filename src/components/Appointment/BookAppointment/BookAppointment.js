import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import "./BookAppointment.css";

const bookingData = [
    {
        _id: 'j9djKJ893du498kKHOHdfkj93ur9nsd',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 2
    },
    {
        _id: 'j9djKJ893ajkdu498kdfkj93ur9nsd',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 15
    },
    {
        _id: 'j9djcJdJ893du498kdfkj93ur9nsd',
        id: 3,
        subject: 'Cavity Production',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 5
    },
    {
        _id: 'j9djKJ893du498kdfkj93ur9nsd',
        id: 4,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 9
    },
    {
        _id: 'j9djd83nmn93ddu498kdfkj93ur9nsd',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'j9djKJ893du498kdfkjpHSr9nsd',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]

const BookAppointment = ({date}) => {
    return (
       <section>
           <h2 className="text-center text_brand mb-5 pb-5">Available Appointment on  {date.toDateString()}</h2>
                                                          {/* ei code diye tumi ze date^^^^^^^^^^^^^^^^ Appointment theke aste che ze date oi ta ke String e convert kore dicho ei code diye zeno h2 tag er modde use korte paro */}
           <div className="row">
               {
                   bookingData.map(booking => <BookingCard key={booking._id} booking={booking} date={date}></BookingCard> )
               }
           </div>
       </section>
    );
};

export default BookAppointment;