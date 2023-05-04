import React from "react";
import "./Banner.scss";

const Banner = () => {
    return(
      <div className={"banner"}>
            <div className={"banner-text"}>
                <h2 id={"title"}>Stay curious.</h2>
                <h3 id={"description"}>
                    Discover stories, thinking, and expertise<br/>
                    from writers on any topic.
                </h3>
            </div>
          <button>Start reading</button>
      </div>
    );
}

export default Banner;