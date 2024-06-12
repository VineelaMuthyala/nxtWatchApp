import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginForm,
  NxtwatchLogo,
  LoginInputContainer,
  UserName,
  UsernameInput,
  ShowPasswordContainer,
  InputCheckBox,
  ShowPasswordText,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorStatus: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggelPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  submitForm = async event => {
    event.preventDefault()
    console.log('Submit')
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderSubmitFormSuccessful(data.jwt_token)
    } else {
      this.renderSubmitFromFailure(data.error_msg)
    }
  }

  renderSubmitFormSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  renderSubmitFromFailure = errorMsg => {
    this.setState({showErrorStatus: true, errorMsg})
  }

  render() {
    const {username, password, showPassword, showErrorStatus, errorMsg} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.submitForm}>
          <NxtwatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <LoginInputContainer>
            <UserName htmlFor="username">USERNAME</UserName>
            <UsernameInput
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
              id="username"
              type="text"
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <UserName htmlFor="passsword">PASSWORD</UserName>

            <UsernameInput
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
              id="password"
              type={showPassword ? 'text' : 'password'}
            />
          </LoginInputContainer>
          <ShowPasswordContainer>
            <InputCheckBox type="checkbox" onClick={this.toggelPassword} />
            <ShowPasswordText>Show Password</ShowPasswordText>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorStatus && <ErrorMessage>* {errorMsg}</ErrorMessage>}
        </LoginForm>
      </LoginContainer>
    )
  }
}
export default Login
