import React from 'react';
import Calendar from "./pages/Calendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shell from "./pages/Shell";
import { Provider } from 'react-redux'
import store from './redux/store';

function App()
{
  return (
    <Provider store={store}>
      <Router>
        <Shell>
          <Switch>
            <Route exact path="/" component={Calendar} />
          </Switch>
        </Shell>
      </Router>
    </Provider>
  );
}

export default App;
