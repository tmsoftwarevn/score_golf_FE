import Bangdiem from "../../component/bangdiem/Bangdiem";
import img from "../../assets/images/bannerTour1702012247.png";
import Search from "antd/es/input/Search";
import "./home.scss";
import SimpleTabs from "../slide tabs/SlideTab";

const Home = () => {
  const onSearch = (value, _e, info) => {
    console.log(value);
  };
  return (
    <div className="home max-w-screen-xl mx-auto">
      <img src={img} />
      <div className="search my-3">
        <Search placeholder="Player Name" onSearch={onSearch} enterButton />
      </div>
     
      <SimpleTabs />
      <p className="text-right text-xs">Last Updated: 12/10/2023 13:55</p>
      <Bangdiem />
      
    </div>
  );
};

export default Home;
