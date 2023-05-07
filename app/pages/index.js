import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Trending from "../components/Trending/Trending";
import News from "../components/News/News";
import Head from "next/head";

const Index = (props) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png"/>
                <title>Medium - Where good ideas find you.</title>
            </Head>
            <div className={"yellow-part"}>
                <NavBar/>
                <Banner/>
            </div>
            <div className={"white-part"}>
                <Trending
                    data={props.trendingData}
                />
                <News
                    data={props.newsData}
                />
            </div>
        </div>
    )
}
export default Index

export async function getServerSideProps() {
    const trendingData = [
        {
            "id": "01",
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*nbJ41jD1-r2Oe6FsLjKaOg.png",
            "author": "Minko Gechev",
            "title": "Angular v18 is here!",
            "date": "May 3",
            "readTime": "12 min read"
        },
        {
            "id": "02",
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*S7UqzvgCrfLaZ6EX56raJQ.png",
            "author": "Judd Antin",
            "title": "The UX Research Reckoning is Here",
            "date": "Apr 26",
            "readTime": "3 min read"
        },
        {
            "id": "03",
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*mDhF9X4VO0rCrJvWFatyxg.png",
            "author": "Felicia Wu",
            "title": "My first layoff was the best thing that could happen to my career",
            "date": "Apr 24",
            "readTime": "7 min read"
        },
        {
            "id": "04",
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*4Sybq8pTkkfjqANAw9SiRA.jpeg",
            "author": "Whitney Alese",
            "title": "There will be no mourning Carolyn Bryant Donham",
            "date": "Apr 27",
            "readTime": "3 min read"
        },{
            "id": "05",
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*IL0mnvzNcpG2ZD0JBqo7zQ.jpeg",
            "author": "Cassie Kozyrkov",
            "title": "How AI is Evolving",
            "date": "Apr 26",
            "readTime": "3 min read"
        },
        {
            "id": "06",
            "imgSrc": "https://miro.medium.com/v2/resize:fill:40:40/1*ZpqTjur1EEzN4KzM4e-Bnw.png",
            "author": "Joseph Mavericks",
            "title": "Airbnb's $600K Pitch Dock: A Presentation Masterclass for Entrepreneurs",
            "date": "May 2",
            "readTime": "9 min read"
        },
    ]
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

    return {props: {trendingData, newsData}}
}