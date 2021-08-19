import React, { Component } from 'react'
import Detail from './views/Detail'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchMe } from './store/action/auth'
import { AuthRoute, PrivateRoute } from './HOCs/Route'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/detail/:id" component={Detail}></Route>
            {/* <Route path="/signin" 
              render={() => {
                if(localStorage.getItem("token")) {
                  return <Redirect to="/"></Redirect>;
                }
                return <SignIn></SignIn>;
              }}></Route>
            <Route path="/signup" 
              render={() => {
                if(localStorage.getItem("token")) {
                  return <Redirect to="/"></Redirect>;
                }
                return <SignUp></SignUp>;
              }}></Route> */}
            <AuthRoute path="/signin" component={SignIn} redirectPath="/"></AuthRoute>
            <AuthRoute path="/signup" component={SignUp} redirectPath="/"></AuthRoute>
            <PrivateRoute path="/" component={Home} redirectPath="/signin"></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token) {
      this.props.dispatch(fetchMe)
    }
  }
}


export default connect()(App);

// npm i react-router-dom --save
