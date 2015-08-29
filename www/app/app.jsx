import React from 'react'
import Router from 'react-router'

import './app.less'

import Home from './pages/home/home.jsx'
import LoginSignup from './pages/login_signup/login_signup.jsx'
import BirdPage from './pages/bird_page/bird_page.jsx'

let DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler

React.initializeTouchEvents(true)

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('app mount')
  }

  render() {
    return  <div className="app">
              {/* this is the important part */}
              <RouteHandler/>
            </div>
  }
}

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="login_signup" handler={LoginSignup}/>
    <Route name="bird" handler={BirdPage}/>
    <DefaultRoute handler={LoginSignup}/>
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
})
