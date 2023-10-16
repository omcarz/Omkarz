import React from "react";
import "../styles/route.css";
import Car from "../images/rtcar.svg";
import Rtdata from "./rtdata.json";
import Arrow from "../images/arrow.svg";

function Route() {
    return (
        <React.Fragment>
            <div className="route-main-div">

                <div className="rt-head">
                    <p>Our Well Known Routes</p>
                    <hr className="rt-hr" />
                </div>

                <div className="rt-cards-div">

                    {
                        Rtdata.map((rt) => {
                            return <div className="rt-card">
                                <hr className="rt-cd-hr" />
                                <div className="rt-card-hd">
                                    <p>{rt.src}</p>
                                    <img className="rt-card-arw-img" src={Arrow} alt="arrow-img" />
                                    <p>{rt.dest}</p>
                                </div>
                                <hr className="rt-cd-hr" />

                                <div className="rt-card-main">
                                    <p className="rt-card-l1">{rt.l1}</p>
                                    <p className="rt-card-l2">{rt.l2}</p>
                                    <img className="car-card-img" src={Car} alt="car-img" />
                                    <p className="rt-card-l3">{rt.l4}</p>
                                    <p className="rt-card-l3">{rt.l5}</p>
                                    <button className="rt-card-btn">BOOK NOW</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Route