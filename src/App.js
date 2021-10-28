import React from 'react'
import Home from './Home'
import Watch from './Watch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={ process.env.PUBLIC_URL + '/watch' }>
            <Watch />
          </Route>
          <Route exact path={ process.env.PUBLIC_URL + '/' }>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App
