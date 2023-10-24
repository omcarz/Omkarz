import React, { useEffect, useState } from 'react'
import '../styles/serviceCard.css'
export default function ServiceCard(props) {

    const [styyle, setStyle] = useState({});
    const taxiClass = {
        flexDirection: "row-reverse"
    }
    useEffect(() => {
        if (props.heading === "Outstation service") {
            setStyle(taxiClass);
        }
    }, [])
    return (
        <div className='ServiceCard' style={styyle}>
            <div>
                <img src={props.img} alt="service" className='serviceCardImg' />
            </div>
            <div className='serviceCardInfo'>
                <div className='serviceCardHeading'>
                    {props.heading}
                </div>
                <div className='serviceCardPara'>
                    {props.para}
                </div>
            </div>
        </div>
    )
}
