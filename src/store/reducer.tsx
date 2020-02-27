import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from "../common/header/store";

const reducer = combineReducers({
  header: headerReducer as any
})

export default reducer;