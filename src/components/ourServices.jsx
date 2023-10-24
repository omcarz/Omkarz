import React from 'react'
import ServiceCard from './serviceCard'
import Taxi from '../images/ServicesTaxi.svg'
import Airplane from '../images/Airplane.svg'
import Clock from '../images/serviceClock.svg'
import '../styles/services.css'

export default function ourServices() {
  const airport = {
    heading: "Airport Service",
    paragraph: "PickUp & Drop service from Airport are also available at omkarz.",
    img: Airplane
  }
  const Outstaion = {
    heading: "Outstation service",
    paragraph: "Book your outstation journey today for a safe, convenient, and memorable travel experience.",
    img: Taxi
  }
  const Availability = {
    heading: "24x7 Available",
    paragraph: "Our support staff at our 24*7 customer support helpline for any queries or requirements.",
    img: Clock
  }
  return (
    <div className='services-mainDiv' id="aboutus">
      <h1 style={{ marginBottom: "2%" }}>our services</h1>
      <hr className='hr' />
      <div className='serviceList'>
        <div className='servicesRow'>
          <div>
            <ServiceCard className="service1and3" img={airport.img} heading={airport.heading} para={airport.paragraph} />
          </div>
          <div className='emptyDiv'></div>
        </div>
        <div className='servicesRow'>
          <div className='emptyDiv'></div>
          <div>
            <ServiceCard className="service2" img={Outstaion.img} heading={Outstaion.heading} para={Outstaion.paragraph} />
          </div>
        </div>
        <div className='servicesRow'>
          <div>
            <ServiceCard className="service1and3" img={Availability.img} heading={Availability.heading} para={Availability.paragraph} />
          </div>
          <div className='emptyDiv'></div>
        </div>
      </div>
    </div>
  )
}
