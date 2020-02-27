import * as React from "react";
import {
  ListItem,
  ListInfo,
  LoadMore
} from "../style";
import { connect } from "react-redux";
import {HomeState, TextList} from "../store/reducer";
import {actionCreator} from '../store'
interface Prop {
  list?: (TextList & {get: (s: string) => string})[];
  getMore?: () => void;
}
const List: React.FC<Prop> = (props) => {
  const { list, getMore } = props
  return (
    <div>
      {
        list && list.map((item, index) =>
          <ListItem className={"pic"} key={index}>
            <img src={item.get('imgUrl')} alt=""/>
            <ListInfo>
              <h3 className={"title"}>{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        )
      }
      <LoadMore onClick={getMore}>加载更多</LoadMore>
    </div>
  )
}
const mapState = (state: HomeState) => ({
  list: state.get!('home').get!('articleList')
})
const mapDispatch = (dispatch: any) => {
  return {
    getMore: () => {
      dispatch(actionCreator.getMoreData())
    }
  }
}
export default connect(mapState, mapDispatch)(List);