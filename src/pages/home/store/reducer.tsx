import { fromJS } from 'immutable'
import * as constants from './constants'
export interface HomeState {
  set?: (a: any, b: any) => any;
  get?: (a: any) => any;
  topicList?: TopicList;
  articleList?: TextList[];
  recommendList?: string[];
}
export interface DefaultList {
  id: number;
  title: string;
  imgUrl: string;
}
export interface TextList extends DefaultList{
  desc: string;
}
export type TopicList = Array<DefaultList>;
interface Action extends HomeState{
  data?: any;
  type: string;
}
const defaultState: HomeState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})
type Rducer = (state: HomeState, action: Action) => HomeState;
export const reducer: Rducer = (state= defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST:
      const {topicList, articleList, recommendList} = action
      return state.set!('topicList', topicList).set!('articleList', articleList)
        .set!('recommendList', recommendList)
    case constants.MORE_DATA:
      return state.set!('articleList', state.get!('articleList').concat(action.data))
    default:
      return state
  }
}