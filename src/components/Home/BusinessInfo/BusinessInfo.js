import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {

      title: 'Opening Hours',
      description: 'We are open 7 days',
      icon: faClock,
      background: 'primary'

    },
    {

        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
  
      },
      {

        title: 'Call us now',
        description: '+156978684867',
        icon: faPhone,
        background: 'primary'
  
      },
]

const BusinessInfo = () => {
 

    return (
        <section className="row">
             {
               infosData.map(info => <InfoCard info={info}></InfoCard>)  
             }
        </section>
    );
};

export default BusinessInfo;