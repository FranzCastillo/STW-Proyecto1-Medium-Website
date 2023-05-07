import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Trending from "../components/Trending/Trending";
import News from "../components/News/News";
import Head from "next/head";

const Index = (props) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png" />
                <title>Medium - Where good ideas find you.</title>
            </Head>
            <div className={"yellow-part"}>
                <NavBar />
                <Banner />
            </div>
            <div className={"white-part"}>
                <Trending />
                <News />
            </div>
        </div>
    )
}

export default Index