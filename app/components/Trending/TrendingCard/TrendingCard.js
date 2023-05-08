import React from 'react';
import StarIcon from "../../StarIcon";

const TrendingCard = ({id, imgSrc, author, title, date, readTime, hasStar}) => {
    return(
        <div className={"trending-card"}>
            <div className={"id-display"}>
                <span className={"id"}>{id}</span>
            </div>
            <div className={"content"}>
                <div className={"user-info"}>
                    <img src={imgSrc} alt={"logo"} className={"logo"}/>
                    <div className={"author"}>
                        <h4 id={"name"}>{author}</h4>
                    </div>
                </div>
                <div className={"title"}>
                    <h2>{title}</h2>
                </div>
                <div className={"post-info"}>
                    <span className={"date"}>{date}</span>
                    <span className={"dot"}>•</span>
                    <span className={"read-time"}>{readTime}</span>
                    {hasStar ? <StarIcon /> : null}
                </div>
            </div>
        </div>
    )
}

export default TrendingCard;