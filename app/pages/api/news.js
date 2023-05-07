import NewsCard from "../../components/News/NewsCard/NewsCard";
import React from "react";

const handler = (req, res) => {
    const newsData = [
        {
            "imgSrc": "https://miro.medium.com/v2/resize:fill:20:20/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
            "author": "Medium Staff",
            "title": "What we're reading: When modern life and history intersect",
            "description": "A few Medium stories you may have missed this week",
            "date": "May 5",
            "readTime": "4 min read",
            "chipName": "Medium",
            "coverPhotoSrc": "https://miro.medium.com/v2/resize:fill:200:134/1*523g8yJp6WGlwUZXLbuvQg.png"
        },
        {
            "imgSrc": "https://miro.medium.com/v2/resize:fill:20:20/0*-CUITFiQ0Buuql-x.",
            "author": "Jan Kammerath",
            "title": "Boomer Developers: 10 Lessons I Learned From Them",
            "description": "Boomers taught me valuable lessons about software engineering which I want to share with you. Especially if you're a younger developer.",
            "date": "Apr 23",
            "readTime": "17 min read",
            "chipName": "Programming",
            "coverPhotoSrc": "https://miro.medium.com/v2/resize:fill:200:134/1*X-_AvCTBRFyTGXpcz_utlA.png"
        },
        {
            "imgSrc": "https://miro.medium.com/v2/resize:fill:20:20/1*tPfbBeQ23qMKUptWlw1FaQ.jpeg",
            "author": "Paul Greenberg",
            "title": "Fitzgerald and the Writer's Strike",
            "description": "F. Scott's last creation is a warning to the picket line.",
            "date": "Apr 26",
            "readTime": "6 min read",
            "chipName": "Writing",
            "coverPhotoSrc": "https://miro.medium.com/v2/resize:fill:200:134/1*nW36GR_ZSYROI-U0CpQRkA.png"
        },
        {
            "imgSrc": "https://miro.medium.com/v2/resize:fill:20:20/1*ROtLAgltIdICq2DTRUMKqg.jpeg",
            "author": "Xanadu Allen",
            "title": "Sea Turtles Saved My Life",
            "description": "And the cycle continues beyond measure",
            "date": "May 2",
            "readTime": "7 min read",
            "chipName": "Sea Turtles",
            "coverPhotoSrc": "https://miro.medium.com/v2/resize:fill:200:134/0*fDHA_4K1QRIsktoI"
        },
        {
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*w4xWkbxe1SagK3TQkLmM5A.jpeg",
            "author": "Donald G. McNeil Jr.",
            "title": "New York Times Magazine Interview With Dr. Fauci: Science Fiction",
            "description": "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…",
            "date": "Apr 27",
            "readTime": "18 min read",
            "chipName": "Covid-19",
            "coverPhotoSrc": "https://miro.medium.com/v2/resize:fill:200:134/1*BHIhJEaYvoOGdtdAnarn2A.jpeg"
        },
        {
            "imgSrc": "https://miro.medium.com/v2/resize:fill:20:20/1*RPBgEuskei0cI2VExBRQLQ.png",
            "author": "Scott Lenet",
            "title": "Honesty Is More Powerful Than Positivity",
            "description": "Luke Skywalker offers valuable lessons for entrepreneurs and VCs in The Last Jedi",
            "date": "May 1",
            "readTime": "6 min read",
            "chipName": "Corporate Innovation",
            "coverPhotoSrc": "https://miro.medium.com/v2/resize:fill:200:134/1*QMUAD6k4BYFBWTsSTJnGCg.png"
        },
    ]

    res.status(200).json(newsData);
}

export default handler