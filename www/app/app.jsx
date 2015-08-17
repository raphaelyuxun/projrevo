import React from 'react'
import Router from 'react-router'

import './app.less'

import Home from './pages/home/home.jsx'
import LoginSignup from './pages/login_signup/login_signup.jsx'

let DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return  <div class="app">
              {/* this is the important part */}
              <RouteHandler/>
            </div>
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="login_signup" handler={LoginSignup}/>
    <DefaultRoute handler={Home}/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
})
