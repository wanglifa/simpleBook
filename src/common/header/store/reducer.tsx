import * as constants from './constants'
import { fromJS } from 'immutable'
export interface State {
  focused: boolean;
  set?: (a: any, b: any) => void;
  get?: (a: any) => boolean;
}
const defaultState = fromJS({
  focused: false
})
export const reducer = (state: State = defaultState, action: {type: string}) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set!('focused', true)
  }
  if (action.type === constants.SEARCH_BLURS) {
    return state.set!('focused', false)
  }
  return state
}