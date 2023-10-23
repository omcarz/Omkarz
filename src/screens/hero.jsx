import React, { useEffect } from 'react'
import Taxi from "../images/yellowTaxi.svg"
import PhoneTaxi from "../images/phoneTaxi.svg"
import '../styles/hero.css'
import { useState } from 'react';

export default function Hero() {

  const timings = "Mon-Sun: 5:00 AM To 11:00PM";
  const [image, setImage] = useState(Taxi);
  const [heroTxt, setHeroTxt] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 500) {
      setImage(PhoneTaxi);
      setHeroTxt(true);
    }

  }, [])
  return (
    <div className='hero'>
      <img src={image} className='hero-taxi-img' alt="hero" />
      <div className='timings'>
        <i style={{ marginRight: "6px" }} class="fa-solid fa-clock" ></i>
        {timings}
      </div>
      <div className='tagline'>
        {!heroTxt &&
          <div>
            <p style={{ display: "flex", flexDirection: "row-reverse" }}>Moving People</p>
            and the <strong style={{ color: "#FFC440" }}>Ahmedabad</strong>
          </div>
        }

        {heroTxt &&
          <div >
            <p>Moving <br></br>
              People <br></br>
              and the<br></br>
              <strong style={{ color: "#FFC440", position: "relative", right: '35%' }}>Ahmedabad</strong></p>
          </div>}
      </div>
      <div className='bookNow'>
        <div className='bookNow-heading'>Book Now</div>
        <div className='bookNow-icons'>
          <div className='bookNow-icon' style={{ marginRight: "25px" }}>
            <a href="tel:7802957645" className='navb-link'>
              <i class="fa-solid fa-phone-volume" style={{ transform: "scale(0.5)", }}></i>
            </a>
          </div>
          <div className='bookNow-icon' style={{ marginLeft: "25px" }}>
            <a href='https://wa.me/+917802957645' className='navb-link' target='blank'>
              <i class="fa-brands fa-whatsapp" style={{ transform: "scale(0.67)" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
