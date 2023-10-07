import React from 'react'
import Navbar from '../components/navbar'
import Taxi from "../images/yellowTaxi.svg"
import '../styles/hero.css'

export default function hero() {
  return (
    <div className='hero'>
        <Navbar/>
        <img src={Taxi} className='hero-taxi-img'/>
    </div>
  )
}
