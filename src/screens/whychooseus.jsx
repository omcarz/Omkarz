import React from "react";
import "../styles/whychooseus.css";
import Money from "../images/money.svg";
import Clock from "../images/clock.svg";
import Id from "../images/id.svg";

function Whychooseus() {
    return (
        <React.Fragment>
            <div style={{ margin: "0 8%" }}>
                <div className="wcu-main-div">

                    <p className="wcu-hd">Why to Choose us!</p>

                    <div className="wcu-cards-div">
                        <div className="wcu-card">
                            <img className="wcu-card-img" src={Money} alt="money-img" />
                            <p className="wcu-card-l1">Affordable Prices</p>
                            <p className="wcu-card-l2">Travel you at best price and excellent service.</p>
                        </div>
                        <div className="wcu-card">
                            <img className="wcu-card-img" src={Clock} alt="clock-img" />
                            <p className="wcu-card-l1">Timely Services</p>
                            <p className="wcu-card-l2">On time Pick up and Drop safely at your destination.</p>
                        </div>
                        <div className="wcu-card">
                            <img className="wcu-card-img" src={Id} alt="id-img" />
                            <p className="wcu-card-l1">Verified Drivers</p>
                            <p className="wcu-card-l2">All Drivers are verified and Lincensed for your better quality.</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Whychooseus;