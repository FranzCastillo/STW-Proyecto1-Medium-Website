import React, {useEffect, useState} from "react";
import Logo from "./Logo";
import "./NavBar.scss";

const NavBar = () => {
    const [isYellow, setIsYellow] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 300) {
                setIsYellow(false);
            } else {
                setIsYellow(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

        return (
            <div className={isYellow? "nav-bar-yellow" : "nav-bar-white"}>
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