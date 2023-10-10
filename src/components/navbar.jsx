import React, { useState } from 'react'
import '../styles/navbar.css'
import Logo from '../images/logo.svg'

export default function Navbar() {
    const [dropdown,setDropDown]=useState({
        display:"none"
    })
    const [clickedBars,setClickedBars]=useState(false);
    const drpdwnOnClick={
        display:"flex",
        flexDirection: "column",
        backgroundColor:"black",
        color:"whitesmoke",
        position:"fixed",
        top:"32px",
        right:"0px",
        opacity:"0.8"
    }
    function Dropdown(){
        // console.log("dropdown");
        if(!clickedBars){
            setDropDown(drpdwnOnClick);
            setClickedBars(true);
            console.log("opnen");
        }
        else{
            setDropDown({ display:"none"});
            setClickedBars(false);
            console.log("close");
        }
        
    }
    return (
        <div className='navbar'>
            <div>
                <img src={Logo} className='logo' alt=""/>
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
                        <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        Book Now
                    </li>
                    <li className='list-items'>
                        <div className='navbar-icons'>
                        <i class="fa-brands fa-whatsapp"></i>
                        </div>
                        Whatsapp
                    </li>
                    <li className='list-items'>
                        <div className='navbar-icons'>
                        <i class="fa-solid fa-address-card"></i>
                        </div>
                        About Us
                    </li>
                    <li className='navbar-Bars'>
                        <i class="fa-solid fa-bars" onClickCapture={Dropdown} ></i>
                        <div style={dropdown} 
                        // onMouseLeave={Dropdown}
                        >
                            <ul className='navbar-barsList'>
                                <li className='navbar-barsListItems'>Home</li>
                                {/* <hr/> */}
                                <li className='navbar-barsListItems'>Book Now</li>
                                {/* <hr/> */}
                                <li className='navbar-barsListItems'>Whatsapp</li>
                                {/* <hr/> */}
                                <li className='navbar-barsListItems'>About Us</li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}
