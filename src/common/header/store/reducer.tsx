import * as constants from './constants'
import { fromJS } from 'immutable'
export interface State {
  focused?: boolean;
  list?: string[];
  page?: number;
  totalPage?: number;
  set?: (a: any, b: any) => any;
  get?: (a: any) => any;
  mouseIn?: boolean;
}
interface Action extends State{
  data?: any;
  type: string;
}
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})
type Rducer = (state: State, action: Action) => State;
export const reducer: Rducer = (state= defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set!('focused', true);
    case constants.SEARCH_BLURS:
      return state.set!('focused', false);
    case constants.CHANGE_LIST:
      return state.set!('list', action.data).set('totalPage', action.totalPage);
    case constants.MouseEnter:
      return state.set!('mouseIn', true)
    case constants.MouseLeave:
      return state.set!('mouseIn', false)
    case constants.ON_CLICK:
      return state.set!('page', action.page)
    default:
      return state
  }
}