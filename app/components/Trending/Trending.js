import React from "react";
import {Grid} from "@mui/material";
import Box from '@mui/material/Box';
import TrendingIcon from "./TrendingCard/TrendingIcon";
import TrendingCard from "./TrendingCard/TrendingCard";

const Trending = (props) => {
    const { data } = props;

    return(
        <div className={"trending"}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={"trending-title"}>
                            <TrendingIcon />
                            <h2 id={"title-text"}>Trending on Medium</h2>
                        </div>
                    </Grid>
                    {data.map((item) => (
                        <Grid item xs={4}>
                            <TrendingCard
                                id={item.id}
                                imgSrc={item.imgSrc}
                                author={item.author}
                                title={item.title}
                                date={item.date}
                                readTime={item.readTime}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Trending;