import * as constants from './constants'
import axios from 'axios'
import { fromJS } from "immutable";
const TopicListOne = (data: any) => {
 const [topicList, articleList, recommendList] = ['topicList', 'articleList', 'recommendList'].map(item => {
    return fromJS(data[item])
  })
  return {
    type: constants.TOPIC_LIST,
    topicList,
    articleList,
    recommendList
  }
}
export const getTopList = () => {
  return (dispatch: (s: {}) => void) => {
    axios.get('/api/home.json').then((res) => {
      dispatch(TopicListOne(res.data.data))
    })
  }
}

const moreData = (data: any) => ({
  type: constants.MORE_DATA,
  data: fromJS(data)
})
export const getMoreData = () => {
  return (dipatch: (s: {}) => void) => {
    axios.get('/api/homeList.json').then((res) => {
      dipatch(moreData(res.data.data))
    })
  }
}