import * as constants from './constants'
import axios from 'axios'
import { fromJS } from "immutable";
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLURS
})
export const mouseEnter = () => ({
  type: constants.MouseEnter
})
export const mouseLeave = () => ({
  type: constants.MouseLeave
})
export const onClick = (page: number) => ({
  type: constants.ON_CLICK,
  page
})
const changeList = (data: string[]) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
  return (dispatch: (a: {type: string}) => void) => {
    axios.get('/api/headerList.json').then((res => {
      dispatch(changeList(res.data.data))
    })).catch(error=> console.log(error))
  }
}