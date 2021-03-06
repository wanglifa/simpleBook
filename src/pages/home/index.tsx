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
import {actionCreator} from "./store";
import {useEffect} from "react";
import {connect} from "react-redux";

interface Prop {
  getTopicList: () => void;
}
const Home: React.FC<Prop> = (props) => {
  useEffect(() => {
    props.getTopicList()
  }, [])
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
const mapDispatch = (dispatch: (a: {type: string} | any) => void) => {
  return {
    getTopicList: () => {
      dispatch(actionCreator.getTopList())
    }
  }
}
export default connect(null, mapDispatch)(Home);