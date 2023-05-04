import React from "react";
import Logo from "./Logo";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <div className={"nav-bar"}>
            <Logo/>
            <div id={"separator"}></div>
            <div className={"nav-bar-links"}>
                <a href={"#"}>Our story</a>
                <a href={"#"}>Membership</a>
                <a href={"#"}>Write</a>
                <a href={"#"}>Sign In</a>
                <button>Get started</button>
            </div>
        </div>
    );
}

export default NavBar;