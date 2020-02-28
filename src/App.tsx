import React from 'react';
import Header from "./common/header";
import {Provider} from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from './pages/login'

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header/>
          <div>
            <Route path={"/"} component={Home} exact></Route>
            <Route path={"/detail"} component={Detail} exact></Route>
            <Route path={"/login"} component={Login} exact></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
