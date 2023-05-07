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
    const trendingData = await fetch("/api/trending'").then(res => res.json());
    const newsData = await fetch("/api/news").then(res => res.json());

    return {props: {trendingData, newsData}}
}