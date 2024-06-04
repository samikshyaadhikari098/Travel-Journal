import React from 'react'
import earth from './i.png'

export default function Navbar(){
    return(
        <nav class="navbar">
            <div class="navbar-logo">
                <img className='myEarth' src={earth} alt="mylogo"></img>
            </div>
        <div class="navbar-links">
            <h3>My Travel Journals</h3>
        </div>
        <div class="navbar-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        </nav>
    )
}