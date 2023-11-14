import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormBgContainer,
  LoginCard,
  WebsiteLogo,
  FormContainer,
  InputContainer,
  LoginButton,
  ErrorMessage,
  InputLabel,
  UsernameInputField,
  PasswordInputField,
  ShowPasswordCont,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onShowPassword = () => {
    const {showPassword} = this.state
    if (showPassword) {
      return 'text'
    }
    return 'password'
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPasswordField = () => {
    const {password} = this.state
    const inputType = this.onShowPassword()
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type={inputType}
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UsernameInputField
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginFormBgContainer>
        <LoginCard>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.submitForm}>
            <InputContainer>{this.renderUsernameField()}</InputContainer>
            <InputContainer>{this.renderPasswordField()}</InputContainer>
            <ShowPasswordCont>
              <input
                type="checkbox"
                id="passwordShow"
                onClick={this.onToggleShowPassword}
              />
              <label htmlFor="passwordShow">Show Password</label>
            </ShowPasswordCont>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          </FormContainer>
        </LoginCard>
      </LoginFormBgContainer>
    )
  }
}

export default LoginForm
