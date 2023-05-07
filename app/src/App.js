import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Trending from "./components/Trending/Trending";
import News from "./components/News/News";

const App = () => {
  return (
      <div>
        <div className={"yellow-part"}>
          <NavBar />
          <Banner />
        </div>
        <div className={"white-part"}>
          <Trending />
          <News />
        </div>
      </div>
  );
};

export default App;