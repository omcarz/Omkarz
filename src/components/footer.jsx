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
                        <p className="contactInfoPara">7802957645</p>
                    </div>
                    <div>
                        <h6 className='contactHeading'>Email</h6>
                        <p className="contactInfoPara">omcarz@gmail.com</p>
                    </div>
                </div>
                <div className="contactInfoFooter">
                    <div>
                        <h6 className='contactHeading'>Address</h6>
                        <p className="contactInfoPara">O 501 akruti township
                            Opp samruddhi <br></br> residency,
                            B/h nandanvan,
                            Narol,<br></br>
                            Ahmedabad 382405</p>
                    </div>
                    <div>
                        <h6 className='contactHeading'>Opening Hours</h6>
                        <p className="contactInfoPara">5am—11pm</p>
                    </div>
                </div>
            </div>
            <div className='lowerDivFooter'>
                <p className='copyright'>© 2023 — OMKARZCopyright</p>
            </div>
        </div>
    )
}
