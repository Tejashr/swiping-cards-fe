import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faPhoneAlt, faSun, faUnlockAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { GetuserbyPhone, Postlogin } from "./api";

function Signin() {



    let [otp, setOtp] = useState("");
    let [phone, setPhone] = useState("");
    let history = useHistory();
    let userData = { phone ,otp}



    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3 className="text-dark"><FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Signin</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                let logindata= await Postlogin(userData);
                               console.log(logindata);
                               let message=logindata.data.message;
                                if(message===0){
                                    let users = await GetuserbyPhone(phone);
                                    history.push(`/card/${users.data._id}`)
                                }
                                else if(message==="otp is incorrect"){
                                    alert(`${phone} entered OTP is not valid`)
                                }
                                else
                                {
                                    alert(`${phone}  is not registered`)
                                }
                                setOtp("");
                                setPhone("");
                            }}>
                                <div class="input-group form-group mt-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-dark"><FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="tel" class="form-control" placeholder="99xx99xx99" pattern="[0-9]{10}" required value={phone} onChange={(e) => {
                                        setPhone(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group mt-2">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-dark"><FontAwesomeIcon icon={faUnlockAlt} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="OTP" required value={otp} onChange={(e) => {
                                        setOtp(e.target.value);
                                    }} />
                                </div>
                                <div className="card-footer">
                                    <div class="form-group mt-2 d-flex links">
                                        <input type="submit" value="Signin" class="btn float-right btn-dark" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}






export default Signin;