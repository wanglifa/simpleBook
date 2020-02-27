import * as constants from './constants'
import axios from 'axios'
import { fromJS } from "immutable";
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLURS
})
const changeList = (data: object) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})
export const getList = () => {
  return (dispatch: (a: {type: string}) => void) => {
    axios.get('/api/headerList.json').then((res => {
      dispatch(changeList(res.data.data))
    })).catch(error=> console.log(error))
  }
}