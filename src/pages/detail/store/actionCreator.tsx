import * as constants from './constants'
import {fromJS} from "immutable";
import axios from 'axios'
const changeDetail = (title: string, content: string) => {
  return {
    type: constants.DETAIL_LIST,
    title: fromJS(title),
    content: fromJS(content)
  }
}
export const getDetailList = () => {
  return (dispatch: any) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content))
    })
  }
}