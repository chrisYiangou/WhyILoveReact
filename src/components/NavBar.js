import React from "react"
import reactLogo from "./images/ReactLogo.png"
import "./index.css"

export default function NavBar() {
    return (
        <nav className="nav-bar">
        <img 
        src={reactLogo}
        className="nav--image"
        alt="React Logo"></img>
        <ul className="nav-list">
            <li>About</li>
            <li>Products</li>
            <li>Advice</li>
        </ul>
        </nav> 

    )
}