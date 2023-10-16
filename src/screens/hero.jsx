import React from 'react'
import Navbar from '../components/navbar'
import Taxi from "../images/yellowTaxi.svg"
import '../styles/hero.css'

export default function Hero() {

  const timings = "Mon-Sun: 5:00 AM To 11:00PM";
  return (
    <div className='hero'>
      <Navbar />
      <img src={Taxi} className='hero-taxi-img' alt="hero" />
      <div className='timings'>
        <i style={{ marginRight: "6px" }} class="fa-solid fa-clock" ></i>
        {timings}
      </div>
      <div className='tagline'>
        <p style={{ display: "flex", flexDirection: "row-reverse" }}>Moving People</p>
        and the <strong style={{ color: "#FFC440" }}>Ahmedabad</strong>
        <div className='bookNow'>
          <div className='bookNow-heading'>Book Now</div>
          <div className='bookNow-icons'>
            <div className='bookNow-icon'>
              <a href="tel:7802957645" className='navb-link'>
              <i class="fa-solid fa-phone-volume" style={{ transform: "scale(0.5)", }}></i>
              </a>
            </div>
            <div className='bookNow-icon'>
              <a href='https://wa.me/+917802957645' className='navb-link' target='blank'>
                <i class="fa-brands fa-whatsapp" style={{ transform: "scale(0.67)" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
