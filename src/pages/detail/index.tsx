import * as React from "react";
import { DetailWrapper, Header, Content } from "./style";
import {connect} from "react-redux";
import {DetailState} from "./store/reducer";
import {useEffect} from "react";
import {actionCreator} from './store'
interface Prop {
  title: string;
  content: string;
  getDetail: () => void;
}
const Detail: React.FC<Prop>= (props) => {
  useEffect(() => {
    console.log(props)
    props.getDetail()
  }, [])
  return (
    <DetailWrapper>
      <Header>{props.title}</Header>
      <Content
        dangerouslySetInnerHTML={{__html: props.content}}
      />
    </DetailWrapper>
  )
}
const mapState = (state: DetailState) => ({
  title: state.get!('detail').get!('title'),
  content: state.get!('detail').get!('content')
})
const mapDispath = (dispatch: any) => {
  return {
    getDetail: () => {
      dispatch(actionCreator.getDetailList())
    }
  }
}
export default connect(mapState, mapDispath)(Detail);