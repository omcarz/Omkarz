import React from 'react'
import Logo from "../images/logo.svg"
import '../styles/footer.css'

export default function footer() {
    return (
        <div className='mainDivFooter'>
            <div className='upperDivFooter'>
                <div>
                    <img src={Logo} alt='Logo' className='footerLogo' />
                </div>
                <div className='footerList'>
                        <p>Home</p>
                        <p>Book</p>
                        <p>About</p>
                </div>
                <div className="contactInfoFooter">
                    <div>
                        <h6 className='contactHeading'>Contact Us</h6>
                        <p className="contactInfoPara">+1 999 888-76-54</p>
                    </div>
                    <div>
                        <h6 className='contactHeading'>Email</h6>
                        <p className="contactInfoPara">omkarz@gmail.com</p>
                    </div>
                </div>
                <div className="contactInfoFooter">
                    <div>
                        <h6 className='contactHeading'>Address</h6>
                        <p className="contactInfoPara">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    </div>
                    <div>
                        <h6 className='contactHeading'>Opening Hours</h6>
                        <p className="contactInfoPara">9am—6pm</p>
                    </div>
                </div>
            </div>
            <div className='lowerDivFooter'>
                <p className='copyright'>© 2023 — OMKARZCopyright</p>
            </div>
        </div>
    )
}
