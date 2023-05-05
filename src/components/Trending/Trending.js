import React from "react";
import "./Trending.scss";
import {Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TrendingIcon from "./TrendingIcon";

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
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Trending;