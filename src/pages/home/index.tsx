import * as React from "react";
import {
  HomeLeft,
  HomeRight,
  HomeWrapper
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <HomeLeft>
        <img className={"banner-img"} src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        <Topic/>
        <List/>
      </HomeLeft>
      <HomeRight>
        <Recommend/>
        <Writer/>
      </HomeRight>
    </HomeWrapper>
  )
}
export default Home;