import React from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSun } from '@fortawesome/free-solid-svg-icons'

function Nav() {

  
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand text-light"><FontAwesomeIcon icon={faSun}></FontAwesomeIcon> Swiping Cards</a>
                <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">                      
                        <Link class="nav-item nav-link active text-light" to="/">Instructions</Link>
                        <Link class="nav-item nav-link active text-light" to="/signup">Signup</Link>
                        <Link class="nav-item nav-link active text-light" to="/signin">Signin</Link>
                        <Link class="nav-item nav-link text-light" to="/" >Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;