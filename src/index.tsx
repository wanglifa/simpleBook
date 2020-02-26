import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import { GlobalIcon } from '../src/static/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalIcon/>
    <App/>
  </Fragment>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
