import React from "react";
import {Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import NewsCard from "./NewsCard/NewsCard";

const News = (props) => {
    const { data } = props;


    return (
        <div className={"bottom"}>
            <Box sx={{flexGrow: 1, height: "100%"}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div className={"news"}>
                            {data.map((item) => (
                                <NewsCard
                                    imgSrc={item.imgSrc}
                                    author={item.author}
                                    title={item.title}
                                    description={item.description}
                                    date={item.date}
                                    readTime={item.readTime}
                                    chipName={item.chipName}
                                    coverPhotoSrc={item.coverPhotoSrc}
                                    hasStar={item.hasStar}
                                />
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={4} className={"sticky-wrapper"}>
                        <div className={"right-part"}>
                            <div className={"discover"}>
                                <h2>Discover more of what matters to you</h2>
                                <div className={"chips"}>
                                    <Chip label="Programming" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Data Science" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Technology" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Self Improvement" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Writing" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Relationships" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Machine Learning" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Productivity" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                    <Chip label="Politics" clickable style={{
                                        fontFamily: "medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
                                        fontWeight: "400",
                                        fontSize: "14px"
                                    }}/>
                                </div>
                                <a href={"#"}>See more topics</a>
                            </div>
                            <div className={"footer"}>
                                <a href={"#"}>Help</a>
                                <a href={"#"}>Status</a>
                                <a href={"#"}>Writers</a>
                                <a href={"#"}>Blog</a>
                                <a href={"#"}>Careers</a>
                                <a href={"#"}>Privacy</a>
                                <a href={"#"}>Terms</a>
                                <a href={"#"}>About</a>
                                <a href={"#"}>Texto to speech</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default News;