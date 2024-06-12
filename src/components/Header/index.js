import BackgroundColorContext from '../../context/BackgroundColorContext'
import {
  HeaderContainer,
  HeaderLogoLight,
  HeaderLogoDark,
  LogoutContainer,
  ProfileImage,
  LogoutButton,
  StyledIconMoon,
  StyledIconMenu,
  StyledIconLogout,
  StyledIconSun,
} from './styledComponents'

const Header = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {changeBackgroundColor, mode} = value
      console.log(mode)

      const onClickTheme = () => {
        changeBackgroundColor()
      }
      return (
        <HeaderContainer mode={mode}>
          <HeaderLogoLight
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="light logo"
            mode={mode}
          />
          <HeaderLogoDark
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="dark logo"
            mode={mode}
          />
          <LogoutContainer>
            <StyledIconMoon onClick={onClickTheme} mode={mode} />
            <StyledIconSun onClick={onClickTheme} mode={mode} />
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <StyledIconMenu mode={mode} />
            <LogoutButton mode={mode}>Logout</LogoutButton>
            <StyledIconLogout mode={mode} />
          </LogoutContainer>
        </HeaderContainer>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default Header
