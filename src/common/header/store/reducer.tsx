import * as constants from './constants'
export interface State {
  focused: boolean;
}
const defaultState = {
  focused: false
}
export const reducer = (state: State = defaultState, action: {type: string}) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === constants.SEARCH_BLURS) {
    return {
      focused: false
    }
  }
  return state
}