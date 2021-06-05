import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneAlt, faSun, faUnlockAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Postregister } from "./api";

function Signup() {

    let [otp, setOtp] = useState("");
    let [phone, setPhone] = useState("");
    let [username,setUsername] =useState("");
    let history = useHistory();
    let userData = { phone ,username,otp:"0000"}

    return (
        <>
            <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                        <h3 className="text-dark"><FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Signup</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                if(otp=="0000"){
                                  let regdata=  await Postregister(userData);
                                  if(regdata.data.message==="phone number already exist")
                                  {
                                      alert("phone number is already present try with diffrent phone number")
                                      history.push(`/signup`)
                                  }
                                  else{
                                    history.push(`/signin`)
                                  }
                                    
                                }
                                else{
                                    alert(`${username} entered OTP is not valid`)
                                }
                                setOtp("");
                                setPhone("");
                                setUsername("");
                            }}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-dark"><FontAwesomeIcon icon={faUserAlt} style={{ fontSize: '1.75em' }}></FontAwesomeIcon></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="User Name" required value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
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
                                        <input type="submit" value="Signup" class="btn float-right btn-dark" />
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






export default Signup;