import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Footer from './Components/Footer'
import Home from './Views/Home'
import GenerateCode from './Views/GenerateCode'


function App() {
  return (
    <header>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/GenerateCode">
              <GenerateCode />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </header>
  )
}

export default App;
