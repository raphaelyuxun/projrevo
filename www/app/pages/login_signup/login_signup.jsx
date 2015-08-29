import React from 'react'

import './login_signup.less'

import signupApi from '../../api/signup'

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      login: true
    }
  }

  render() {
    if (this.state.login) { // render login
      return <div className="container login_signup">
                <form className="form-login">
                  <h2 className="heading"> 登录 </h2>
                  <input type="text" placeholder="username" className="form-control" value={this.state.username} onChange={this.inputUsername.bind(this)} required />
                  <input type="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.inputPassword.bind(this)} required />
                  <button className="btn btn-lg btn-primary btn-block login-btn" type="submit" onClick={this.login.bind(this)}> Login </button>
                </form>
                <div className="hint">
                  <span> 没有账户? <a onClick={this.togglePage.bind(this)}> 点击我进行注册 </a></span>
                </div>
             </div>


    } else { // render signup
      return <div className="container login_signup">
                <form className="form-signin">
                  <h2 className="heading"> 注册 </h2>
                  <input type="email" placeholder="email" className="form-control" value={this.state.email} onChange={this.inputEmail.bind(this)} required autofocus />
                  <input type="text" placeholder="username" className="form-control" value={this.state.username} onChange={this.inputUsername.bind(this)} required />
                  <input type="password" placeholder="password" className="form-control" value={this.state.password} onChange={this.inputPassword.bind(this)} required />
                  <button className="btn btn-lg btn-primary btn-block signup-btn" type="submit" onClick={this.signup.bind(this)}> Signup </button>
                </form>
                <div className="hint">
                  <span> 已经有账户了? <a onClick={this.togglePage.bind(this)}> 点击我进行登录 </a></span>
                </div>
             </div>
    }
  }

  togglePage() {
    let login = this.state.login
    this.setState({login: !login})
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
    let username = this.state.username,
        email = this.state.email,
        password = this.state.password
    signupApi.signup(username, email, password, (res)=> {
      alert(res)
    })
  }

  login() {
    let username = this.state.username,
        password = this.state.password
  }
}
