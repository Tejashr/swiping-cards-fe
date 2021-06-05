import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Instructions() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h1 className="text-secondary">INSTRUCTIONS</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-secondary">
                            <ul>
                                <li>If the user swipes left, the image is rejected.</li>
                                <li>If the user swipes right, the image is expressed interest in.</li>
                                <li>If the user swipes  up, he/she is taken to the next image current image will be discarded.</li>
                                <li>All the accepted and rejected images history will we visible for the user</li>
                                <li>OTP for this application is 0000</li>
                            </ul>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <img src="images/thankyou.jpg" className="thank" alt="img"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Instructions;