import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";

const App = () => {
    return (
        <div>
            <div className={"yellow-part"}>
                <NavBar />
                <Banner />
            </div>
        </div>
    );
};

export default App;