import * as React from "react";
import {
  TopicWrapper,
  TopicItem
} from "../style";

const Topic: React.FC = () => {
  return (
    <TopicWrapper>
      <TopicItem>
        <img className={"topic-pic"}
          src="https://up.enterdesk.com/edpic_360_360/c6/df/95/c6df953c0512419d2c74b682a2ea7096.jpg" alt=""/>
          社会热点
      </TopicItem>
    </TopicWrapper>
  )
}
export default Topic;