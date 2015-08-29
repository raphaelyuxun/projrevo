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

//window.localStorage.setItem('userID', null)
//alert('userID2: ' + window.localStorage.getItem('userID') + '   ' + window.location.href)
//let userID = widnow.localStorage.getItem('userID')

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" handler={Home}/>
    <Route name="login_signup" handler={LoginSignup}/>
    <Route name="bird" handler={BirdPage}/>
    <DefaultRoute handler={/*userID ? Home : LoginSignup*/LoginSignup}/>  {/* 如果已经登陆了， 则进入 Home 页面 */}
  </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
})
