import React, { Component } from 'react'
import Detail from './views/Detail'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import { BrowserRouter, Switch, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;

// npm i react-router-dom --save
