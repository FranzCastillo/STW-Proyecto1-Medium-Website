import React from "react";
import "./NavBar.scss";
import Logo from "../Logo/Logo";

const NavBar = () => {
    return (
        <div className={"nav-bar-wrapper"}>
            <div className={"nav-bar"}>
                <div className={"content"}>
                    <div className={"text"}>
                        <div id={"logo"}>
                            <a href={"/"}>
                                <Logo />
                            </a>
                        </div>
                        <div id={"separator"} />
                        <div className={"links"}>
                            <span className={"link"}>
                                <div className={"link-text"}>
                                    <p>
                                        <a href={"/"}>Our Story</a>
                                    </p>
                                </div>
                            </span>
                            <span className={"link"}>
                                <div className={"link-text"}>
                                    <p>
                                        <a href={"/"}>Membership</a>
                                    </p>
                                </div>
                            </span>
                            <span className={"link"}>
                                <div className={"link-text"}>
                                    <p>
                                        <a href={"/"}>Write</a>
                                    </p>
                                </div>
                            </span>
                            <span className={"link"}>
                                <div className={"link-text"}>
                                    <p>
                                        <a href={"/"}>Sign In</a>
                                    </p>
                                </div>
                            </span>
                            <div className={"started-button"}>
                                <span>
                                    <a className={"started-button-link"} href={"/"}>
                                        <button id={"started-button-button"}>Get started</button>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;