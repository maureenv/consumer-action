import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
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
      hi
      <Router>
        <Switch>
          <Route exact path="/watch">
            <Watch />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App
