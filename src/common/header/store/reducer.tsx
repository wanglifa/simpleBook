import * as constants from './constants'
import { fromJS } from 'immutable'
export interface State {
  focused: boolean;
  list: string[];
  set?: (a: any, b: any) => any;
  get?: (a: any) => any;
}
const defaultState = fromJS({
  focused: false,
  list: []
})
type Rducer = (state: State, action: {type: string, data?: any}) => State;
export const reducer: Rducer = (state= defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set!('focused', true)
  }
  if (action.type === constants.SEARCH_BLURS) {
    return state.set!('focused', false)
  }
  if (action.type === constants.CHANGE_LIST) {
    console.log(action, 'action')
    return state.set!('list', action.data)
  }
  return state
}