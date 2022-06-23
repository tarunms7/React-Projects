import React from "react"
import "../index.css"
import logo from "./react_logo.png"

export default function Header(){
    return(
        <div className = "nav_header">
            <img src = {logo} alt = "Image" width = "40px" className = "logo"/>
            <h1>React</h1>
            <ul className = "ul_header" >
                <li>About</li>
                <li>Home</li>
                <li>Pricing</li>
            </ul>
        </div>
    )
}