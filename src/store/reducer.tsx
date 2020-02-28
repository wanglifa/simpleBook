import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from "../common/header/store";
import {reducer as homeReducer } from '../pages/home/store'
import {reducer as detailReducer } from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'

const reducer = combineReducers({
  header: headerReducer as any,
  home: homeReducer as any,
  detail: detailReducer as any,
  login: loginReducer as any
})

export default reducer;