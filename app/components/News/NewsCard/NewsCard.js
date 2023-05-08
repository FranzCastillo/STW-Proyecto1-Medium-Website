import React from "react";
import Chip from '@mui/material/Chip';
import SaveIcon from "./SaveIcon";
import StarIcon from "../../StarIcon";

const NewsCard = ({imgSrc, author, title, description, date, readTime, chipName, coverPhotoSrc, hasStar}) => {
    return(
        <div className={"news-card"}>
            <div className={"text"}>
                <div className={"user-info"}>
                    <img src={imgSrc} alt={"logo"} className={"logo"}/>
                    <h4 id={"author"}>{author}</h4>
                </div>
                <div className={"title"}>
                    <h2>{title}</h2>
                </div>
                <div className={"description"}>
                    <p>{description}</p>
                </div>
                <div className={"post-info"}>
                    <div className={"info"}>
                        <span className={"date"}>{date}</span>
                        <span className={"dot"}>•</span>
                        <span className={"read-time"}>{readTime}</span>
                        <span className={"dot"}>•</span>
                        <Chip
                            size={"small"}
                            label={chipName}
                            className={"chip"}
                            clickable
                        />
                        {hasStar ? <StarIcon /> : null}
                    </div>
                    <div className={"save"}>
                        <SaveIcon/>
                    </div>
                </div>
            </div>
            <div className={"cover-photo"}>
                <img src={coverPhotoSrc} alt={"cover"} className={"cover"}/>
            </div>
        </div>
    );
}

export default NewsCard;