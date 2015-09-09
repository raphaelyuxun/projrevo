import React from 'react'

import './signup.less'

import signupApi from '../../api/signup'

export default class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  render() {
    // render signup
    return <div data-role="page" id="signup-page" className="container login_signup">
              <div data-role="main" className="ui-content">
                <form className="form-signin">
                  <h2 className="heading"> 注册 </h2>
                  <input type="email" placeholder="email" className="form-control" value={this.state.email} onChange={this.inputEmail.bind(this)} required autofocus />
                  <input type="text" placeholder="username" className="form-control" value={this.state.username} onChange={this.inputUsername.bind(this)} required />
                  <input type="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.inputPassword.bind(this)} required />
                  <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={this.signup.bind(this)}> Signup </button>
                </form>
                <div className="hint">
                  <span> 已经有账户了? <a href="#login-page"> 点击我进行登录 </a></span>
                </div>
              </div>
           </div>

  }

  inputEmail(e) {
    this.setState({email: e.target.value})
  }

  inputUsername(e) {
    this.setState({username: e.target.value})
  }

  inputPassword(e) {
    this.setState({password: e.target.value})
  }

  signup() {
    let username = this.state.username.trim(),
        email = this.state.email.trim(),
        password = this.state.password
    signupApi.signup(username, email, password, (res)=> {
      if (res.success) { // signup successfully
        window.localStorage.setItem('userID', res.userID)
        window.localStorage.setItem('username', res.username)
      } else {
        alert(res.msg)
      }
    })
  }
}
