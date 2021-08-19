import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"

const createRoute = (condition) => { 
    return class extends Component {
        render() {
            const { path, component: RouteComponent, redirectPath } = this.props;
            return (
                <Route
                    path={path}
                    render={(routeProps) => {
                        console.log("routeProps", routeProps);
                        if (condition()) {
                            // return <RouteComponent 
                            // history={routeProps.history} 
                            // match={routeProps.match} 
                            // location={routeProps.location}/>;
                            return <RouteComponent {...routeProps}></RouteComponent>
                        }
                        return <Redirect to={redirectPath}></Redirect>;
                    }}></Route>
            )
        }
    }
    
}

export const AuthRoute = createRoute(() => !localStorage.getItem("token"));
export const PrivateRoute = createRoute(() => localStorage.getItem("token"));

// export class AuthRoute extends Component {
//     render() {
//         const { path, component: RouteComponent } = this.props;
//         return (
//             <Route
//                 path={path}
//                 render={() => {
//                     if (localStorage.getItem("token")) {
//                         return <Redirect to="/"></Redirect>;
//                     }
//                     return <RouteComponent />;
//                 }}></Route>
//         )
//     }
// }

// export class PrivateRoute extends Component {
//     render() {
//         const { path, component: RouteComponent } = this.props;
//         return (
//             <Route
//                 path={path}
//                 render={() => {
//                     if (!localStorage.getItem("token")) {
//                         return <Redirect to="/signin"></Redirect>;
//                     }
//                     return <RouteComponent />; 
//                 }}></Route>
//         )
//     }
// }