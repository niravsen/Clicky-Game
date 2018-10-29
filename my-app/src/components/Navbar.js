import React from "react";
import "../styles/NavBar.css";

const Navbar = props => (
    <div className="navbar sticky-top">
        <a className="navbar-brand" href="/React-Clicky-Game/"></a>
        <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)
 

export default Navbar;