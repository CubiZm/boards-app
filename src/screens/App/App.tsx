import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import UiKit from "../UiKit/UiKit";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/ui-kit" component={UiKit} />
      </Switch>
    </div>
  );
};

export default App;
