import React from 'react';
import Calendar from "./pages/Calendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shell from "./pages/Shell";


function App()
{
  return (
    <Router>
        <Shell>
            <Switch>
              <Route exact path="/" component={Calendar} />
            </Switch>
        </Shell>
    </Router>
  );
}

export default App;
