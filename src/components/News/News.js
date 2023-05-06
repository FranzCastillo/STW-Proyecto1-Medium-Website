import React from "react";
import "./News.scss";
import {Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
    return (
        <div className={"bottom"}>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item xs={8}>
                        <div className={"news"}>
                            <NewsCard
                                imgSrc={"https://miro.medium.com/v2/resize:fill:20:20/1*sHhtYhaCe2Uc3IU0IgKwIQ.png"}
                                author={"Medium Staff"}
                                title={"What we're reading: When modern life and history intersect"}
                                description={"A few Medium stories you may have missed this week"}
                                date={"May 5"}
                                readTime={"4 min read"}
                                chipName={"Medium"}
                                coverPhotoSrc={"https://miro.medium.com/v2/resize:fill:200:134/1*523g8yJp6WGlwUZXLbuvQg.png"}
                            />
                            <NewsCard
                                imgSrc={"https://miro.medium.com/v2/resize:fill:20:20/0*-CUITFiQ0Buuql-x."}
                                author={"Jan Kammerath"}
                                title={"Boomer Developers: 10 Lessons I Learned From Them"}
                                description={"Boomers taught me valuable lessons about software engineering which I want to share with you. Especially if you're a younger developer."}
                                date={"Apr 23"}
                                readTime={"17 min read"}
                                chipName={"Programming"}
                                coverPhotoSrc={"https://miro.medium.com/v2/resize:fill:200:134/1*X-_AvCTBRFyTGXpcz_utlA.png"}
                            />
                            <NewsCard
                                imgSrc={"https://miro.medium.com/v2/resize:fill:20:20/1*tPfbBeQ23qMKUptWlw1FaQ.jpeg"}
                                author={"Paul Greenberg"}
                                title={"Fitzgerald and the Writer's Strike"}
                                description={"F. Scott's last creation is a warning to the picket line."}
                                date={"Apr 26"}
                                readTime={"6 min read"}
                                chipName={"Writing"}
                                coverPhotoSrc={"https://miro.medium.com/v2/resize:fill:200:134/1*nW36GR_ZSYROI-U0CpQRkA.png"}
                            />
                            <NewsCard
                                imgSrc={"https://miro.medium.com/v2/resize:fill:20:20/1*ROtLAgltIdICq2DTRUMKqg.jpeg"}
                                author={"Xanadu Allen"}
                                title={"Sea Turtles Saved My Life"}
                                description={"And the cycle continues beyond measure"}
                                date={"May 2"}
                                readTime={"7 min read"}
                                chipName={"Sea Turtles"}
                                coverPhotoSrc={"https://miro.medium.com/v2/resize:fill:200:134/0*fDHA_4K1QRIsktoI"}
                            />
                            <NewsCard
                                imgSrc={"https://miro.medium.com/v2/resize:fill:20:20/1*w4xWkbxe1SagK3TQkLmM5A.jpeg"}
                                author={"Donald G. McNeil Jr."}
                                title={"New York Times Magazine Interview With Dr. Fauci: Science Fiction"}
                                description={"I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…"}
                                date={"Apr 27"}
                                readTime={"18 min read"}
                                chipName={"Covid-19"}
                                coverPhotoSrc={"https://miro.medium.com/v2/resize:fill:200:134/1*BHIhJEaYvoOGdtdAnarn2A.jpeg"}
                            />
                            <NewsCard
                                imgSrc={"https://miro.medium.com/v2/resize:fill:20:20/1*RPBgEuskei0cI2VExBRQLQ.png"}
                                author={"Scott Lenet"}
                                title={"Honesty Is More Powerful Than Positivity"}
                                description={"Luke Skywalker offers valuable lessons for entrepreneurs and VCs in The Last Jedi"}
                                date={"May 1"}
                                readTime={"6 min read"}
                                chipName={"Corporate Innovation"}
                                coverPhotoSrc={"https://miro.medium.com/v2/resize:fill:200:134/1*QMUAD6k4BYFBWTsSTJnGCg.png"}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
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