import React from 'react';
import Header from "./common/header";
import {Provider} from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path={"/"} render={() => <div>home</div>} exact></Route>
            <Route path={"/detail"} render={() => <div>detail</div>} exact></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
