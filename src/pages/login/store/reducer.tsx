import * as constants from './constants'
import { fromJS } from 'immutable'
export interface LoginState {
  set?: (a: any, b: any) => any;
  get?: (a: any) => any;
  login?: boolean;
}
interface Action extends LoginState{
  value?: any;
  type: string;
}
const defaultState = fromJS({
  login: false
})
type Rducer = (state: LoginState, action: Action) => LoginState;
export const reducer: Rducer = (state= defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return state.set!('login', action.value)
    case constants.LOGINOUT:
      return state.set!('login', action.value)
    default:
      return state
  }
}