import React from "react";
import "./Trending.scss";
import {Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TrendingIcon from "./TrendingIcon";
import TrendingCard from "./TrendingCard/TrendingCard";

const Trending = () => {
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
                    <Grid item xs={4}>
                        <TrendingCard
                            id={"01"}
                            imgSrc={"https://miro.medium.com/v2/resize:fill:40:40/1*nbJ41jD1-r2Oe6FsLjKaOg.png"}
                            author={"Minko Gechev"}
                            title={"Angular v18 is here!"}
                            date={"May 3"}
                            readTime={"12 min read"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TrendingCard
                            id={"02"}
                            imgSrc={"https://miro.medium.com/v2/resize:fill:40:40/1*S7UqzvgCrfLaZ6EX56raJQ.png"}
                            author={"Judd Antin"}
                            title={"The UX Research Reckoning is Here"}
                            date={"Apr 26"}
                            readTime={"3 min read"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TrendingCard
                            id={"03"}
                            imgSrc={"https://miro.medium.com/v2/resize:fill:40:40/1*mDhF9X4VO0rCrJvWFatyxg.png"}
                            author={"Felicia Wu"}
                            title={"My first layoff was the best thing that could happen to my career"}
                            date={"Apr 24"}
                            readTime={"7 min read"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TrendingCard
                            id={"04"}
                            imgSrc={"https://miro.medium.com/v2/resize:fill:40:40/1*4Sybq8pTkkfjqANAw9SiRA.jpeg"}
                            author={"Whitney Alese"}
                            title={"There will be no mourning Carolyn Bryant Donham"}
                            date={"Apr 27"}
                            readTime={"3 min read"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TrendingCard
                            id={"05"}
                            imgSrc={"https://miro.medium.com/v2/resize:fill:40:40/1*IL0mnvzNcpG2ZD0JBqo7zQ.jpeg"}
                            author={"Cassie Kozyrkov"}
                            title={"How AI is Evolving"}
                            date={"Apr 26"}
                            readTime={"3 min read"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TrendingCard
                            id={"06"}
                            imgSrc={"https://miro.medium.com/v2/resize:fill:40:40/1*ZpqTjur1EEzN4KzM4e-Bnw.png"}
                            author={"Joseph Mavericks"}
                            title={"Airbnb's $600K Pitch Dock: A Presentation Masterclass for Entrepreneurs"}
                            date={"May 2"}
                            readTime={"9 min read"}
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Trending;