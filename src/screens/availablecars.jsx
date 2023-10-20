import React from "react";
import "../styles/availablecars.css";
import Swift from "../images/swift.svg";
import Ertiga from "../images/Ertiga.svg";

function Availablecars() {
    return (
        <React.Fragment>
            <div className="ac-main-div">

                <div className="ac-head">
                    <p>Available Cars</p>
                    <hr className="ac-hr" />
                </div>

                <div className="ac-row1">
                    <div className="ac-row1-lft">
                        <p className="ac-row-txt-hd">SEDAN-SWIFT DZIRE</p>
                        <p className="ac-row-txt-mn">
                        A 4+1-seater compact sedan, along with the driver, which we provide. We provide an experienced driver who helps you reach your destination safely.                        
                        </p>
                    </div>

                    <div className="ac-row1-rht">
                        <img src={Swift} alt="swift-img" className="ac-row1-img ac-swift-img" />
                    </div>
                </div>

                <div className="ac-row2">
                    <div className="ac-row2-lft">
                        <p className="ac-row-txt-hd">SUV-ERTIGA</p>
                        <p className="ac-row-txt-mn">
                        A 6+1-seater compact and comfortable SUV, along with the driver, which we provide. We provide an experienced driver who helps you reach your destination safely.                            </p>
                    </div>

                    <div className="ac-row2-rht">
                        <img src={Ertiga} alt="Ertiga-img" className="ac-row1-img ac-ert-img" />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Availablecars