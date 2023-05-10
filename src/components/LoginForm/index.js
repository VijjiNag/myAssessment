import { Component } from "react";
import { Navigate } from "react-router-dom";
import LoginButton from "../LoginButton";
import './index.css'
import Cookies from "js-cookie";

class LoginForm extends Component {
  state = {
    errorMsg : '',
    email : '',
    password : ''
  }

  componentDidMount() {
    JSON.parse(localStorage.getItem('user_data'))
  }

  onChangeEmail = event => {
    this.setState({email : event.target.value})
  }

  onChangePassword = event => {
    this.setState({password : event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {email, password} = this.state
    const data = JSON.parse(localStorage.getItem('user_data'))
    if ((email === '') || (password === '')) {
      this.setState({errorMsg : "Email or password is invalid"})
    } else if ((email !== data.email) || (password !== data.password)) {
      this.setState({errorMsg : "Email and password does not matched"})
    }
  }


  render() {
    const {errorMsg, email, password} = this.state
    const token = Cookies.get("key")
    if (token !== undefined) {
      return <Navigate to="/profile"/>
    }
    return (
      <div className="login-container">
        <div className="login">
          <h1>Signin to your PopX account</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscingelit,</p>
          <form className='form-container' onSubmit={this.onSubmitForm}>
            <label htmlFor='emailAddress' className='label'>Email Address</label>
            <input id='emailAddress' className='input' type='email' placeholder='Email Address' onChange={this.onChangeEmail} />
            <label htmlFor='password' className='label'>Password</label>
            <input id='password' className='input' type='password' placeholder='Password' onChange={this.onChangePassword} />
            <LoginButton email={email} password={password} />
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm