import React from 'react'
import './src/App.css';
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/home" class="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/features" class="nav-link active" aria-current="page">Features</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/pricing" class="nav-link active" aria-current="page" >Pricing</Link>
                                </li>
                                <span> <li class="nav-item">
                                    <Link to="/login" class="nav-link active" aria-current="page" >Login</Link>
                                </li></span>
                               
                            </ul>
                         
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default NavBar