import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "../../store";
import DragnDrop from "../DragnDrop/index";
import Summary from "../../Components/Summary/index";
import "./style.css";

class MainApp extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <div className="App">
        <Provider store={store}>
          <div className="app-set">
            <Router>
              <Switch>
                <Route path="/" exact component={DragnDrop} />
                <Route path="/Summary" exact component={Summary} />
              </Switch>
            </Router>
          </div>
        </Provider>
      </div>
    );
  }
}

export default MainApp;
