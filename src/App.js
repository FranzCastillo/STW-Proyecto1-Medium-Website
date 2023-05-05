import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Trending from "./components/Trending/Trending";

const App = () => {
    return (
        <div>
            <div className={"yellow-part"}>
                <NavBar />
                <Banner />
            </div>
            <div className={"white-part"}>
                <Trending />
            </div>
        </div>
    );
};

export default App;