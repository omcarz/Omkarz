import React, { useState } from 'react'
import '../styles/navbar.css'
import Logo from '../images/logo.svg'

export default function Navbar() {
    const [dropdown, setDropDown] = useState({
        display: "none"
    })
    const [clickedBars, setClickedBars] = useState(false);
    const drpdwnOnClick = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        color: "whitesmoke",
        position: "fixed",
        top: "34px",
        right: "0px",
        opacity: "0.8",
        lineHeight: "30px"
    }
    function Dropdown() {
        if (!clickedBars) {
            setDropDown(drpdwnOnClick);
            setClickedBars(true);
        }
        else {
            setDropDown({ display: "none" });
            setClickedBars(false);
            console.log("close");
        }

    }
    return (
        <div className='navbar'>
            <div>
                <img src={Logo} className='logo' alt="" />
            </div>
            <div className='right-section'>
                <ul className='navbar-ul'>
                    <a href="#" className='navb-link'>
                        <li className='list-items'>
                            <div className='navbar-icons'>
                                <i class="fa-solid fa-house" style={{ transform: "scale(1.2)" }}></i>
                            </div>
                            Home
                        </li>
                    </a>
                    <a href="tel:7802957645" className='navb-link'>
                        <li className='list-items'>
                            <div className='navbar-icons'>
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>
                            Book Now
                        </li>
                    </a>
                    <a href='https://wa.me/+917802957645' className='navb-link' target='blank'>
                        <li className='list-items'>
                            <div className='navbar-icons'>
                                <i class="fa-brands fa-whatsapp" style={{ transform: "scale(1.4)" }}></i>
                            </div>
                            Whatsapp
                        </li>
                    </a>
                    <a href='#aboutus' className='navb-link'>
                        <li className='list-items'>
                            <div className='navbar-icons'>
                                <i class="fa-solid fa-address-card"></i>
                            </div>
                            Services
                        </li>
                    </a>
                    <li className='navbar-Bars'>
                        <i class="fa-solid fa-bars" onClickCapture={Dropdown} ></i>
                        <div style={dropdown}
                        // onMouseLeave={Dropdown}
                        >
                            <ul className='navbar-barsList'>
                                <a href="#" className='navb-link'>
                                    <li className='navbar-barsListItems'>Home</li>
                                </a>
                                {/* <hr/> */}
                                <a href="tel:7802957645" className='navb-link'>
                                    <li className='navbar-barsListItems'>Book Now</li>
                                </a>
                                <a href='https://wa.me/+917802957645' className='navb-link' target='blank'>
                                    <li className='navbar-barsListItems'>Whatsapp</li>
                                </a>
                                <a href='#aboutus' className='navb-link'>
                                    <li className='navbar-barsListItems'>Services</li>
                                </a>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div >
    )
}
