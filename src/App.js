import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
    <header>
      <div>
        <Router>
        <Header/>
          <HelloWorld name = "Jarod"/>
          <Switch>
            <Route exact path="/">
              <h1 className="font-bold text-2x1">This is the home page</h1>
            </Route>
            <Route path="/about">
              <h1 className="font-bold text-2x1">About us</h1>
            </Route>
          </Switch>
        </Router>

        <Footer/>
      </div>
    </header>
    
  )
}

export default App;
