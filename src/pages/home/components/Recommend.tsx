import * as React from "react";
import { connect } from "react-redux";
import {HomeState} from "../store/reducer";
import {
  RecommendWrapper,
  RecommendItem
} from "../style";

interface Prop {
  list?: (string & {get: (s: string) => string})[];
}
const Recommend: React.FC<Prop> = (props) => {
  const { list } = props
  return (
    <RecommendWrapper>
      {list && list.map(item =>
        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
      )}
    </RecommendWrapper>
  )
}
const mapState = (state: HomeState) => ({
  list: state.get!('home').get('recommend')
})
export default connect(mapState, null)(Recommend);