import React from 'react'
import '../styles/navbar.css'
import Logo from '../images/logo.svg'

export default function 
() {
  return (
    <div className='navbar'>
        <div>
            <img src={Logo} className='logo'/>
        </div>
        <div className='right-section'>
            <ul className='navbar-ul'>
                <li className='list-items'>
                    <div className='navbar-icons'> 
                    <i class="fa-solid fa-house"></i>
                    </div>
                    Home
                </li>
                <li className='list-items'>
                    <div className='navbar-icons'> 
                    <i class="fa-solid fa-house"></i>
                    </div>
                    Book Now
                </li>
                <li className='list-items'>
                    <div className='navbar-icons'> 
                    <i class="fa-solid fa-house"></i>
                    </div>
                    Whatsapp
                </li>
                <li className='list-items'>
                    <div className='navbar-icons'> 
                    <i class="fa-solid fa-house"></i>
                    </div>
                    About Us
                </li>
            </ul>
        </div>
    </div>
  )
}
