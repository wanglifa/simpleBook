import * as React from "react";
import {connect} from "react-redux";
import {
  TopicWrapper,
  TopicItem
} from "../style";
import {DefaultList, HomeState} from "../store/reducer";
interface Prop {
  list?: (DefaultList & {get: (a: string) => string})[];
}
const Topic: React.FC<Prop> = (props) => {
  const { list } = props
  return (
    <TopicWrapper>
      {
        list && list.map(item =>
          <TopicItem key={item.get('id')}>
            <img src={item.get('imgUrl')} alt="" className={"topic-pic"}/>
            {item.get('title')}
          </TopicItem>
        )
      }
    </TopicWrapper>
  )
}
const mapState = (state: HomeState) => {
  return {
    list: state.get!('home').get!('topicList')
  }
}
export default connect(mapState, null)(Topic);