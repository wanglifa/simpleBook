import * as constants from './constants'
import { fromJS } from 'immutable'
export interface DetailState {
  set?: (a: any, b: any) => any;
  get?: (a: any) => any;
  title?: string;
  content?: string;
}
interface Action extends DetailState{
  data?: any;
  type: string;
}
const defaultState = fromJS({
  title: '',
  content: ''
})
type Rducer = (state: DetailState, action: Action) => DetailState;
export const reducer: Rducer = (state= defaultState, action) => {
  switch (action.type) {
    case constants.DETAIL_LIST:
      console.log(action)
      return state.set!('title', action.title).set!('content', action.content)
    default:
      return state
  }
}