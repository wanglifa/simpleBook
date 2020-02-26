export interface State {
  focused: boolean;
}
const defaultState = {
  focused: false
}
export const reducer = (state: State = defaultState, action: {type: string}) => {
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state
}