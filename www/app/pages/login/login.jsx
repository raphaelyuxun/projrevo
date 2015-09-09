import React from 'react'

import './login.less'

import loginApi from '../../api/login'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return <div data-role="page" id="login-page" className="container login_signup">
              <div data-role="main" className="ui-content">
                <form className="form-login">
                  <h2 className="heading"> 登录 </h2>
                  <input type="text" placeholder="username" className="form-control" value={this.state.username} onChange={this.inputUsername.bind(this)} required />
                  <input type="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.inputPassword.bind(this)} required />
                  <button className="btn btn-lg btn-primary btn-block login-btn" type="submit" onClick={this.login.bind(this)}> Login </button>
                </form>
                <div className="hint">
                  <span> 没有账户? <a href="#signup-page"> 点击我进行注册 </a></span>
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

  login() {
    let username = this.state.username.trim(),
        password = this.state.password
    loginApi.login(username, password, (res)=> {
      if (res.success) { // login successfully
        window.localStorage.setItem('userID', res.userID)
        window.localStorage.setItem('username', res.username)
      } else {
        alert(res.msg)
      }
    })
  }
}
