import React from 'react'

import './app.less'

import Home from './pages/home/home.jsx'
import LoginPage from './pages/login/login.jsx'
import SignupPage from './pages/signup/signup.jsx'
import BirdPage from './pages/bird_page/bird_page.jsx'

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
              {/* several pages */}
                <LoginPage></LoginPage>
                <SignupPage></SignupPage>
                <BirdPage></BirdPage>
            </div>
  }
}

React.render(<App/>, document.body)
