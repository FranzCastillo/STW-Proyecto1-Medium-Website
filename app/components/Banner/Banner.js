import React from "react";
import {Grid} from "@mui/material";
import Box from '@mui/material/Box';
import MMM from "./MMM/MMM";

const Banner = () => {
    return (
        <div className={"banner"}>
            <Box sx={{flexGrow: 1}}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={7}>
                        <div className={"banner-text"}>
                            <h2 id={"title"}>Stay curious.</h2>
                            <h3 id={"description"}>
                                Discover stories, thinking, and expertise<br/>
                                from writers on any topic.
                            </h3>
                        </div>
                        <button>Start reading</button>
                    </Grid>
                    <Grid item xs={5}>
                        <MMM/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Banner;