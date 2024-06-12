import {Link} from 'react-router-dom'
import BackgroundColorContext from '../../context/BackgroundColorContext'

import {
  LeftContainer,
  OptionsUnorderedList,
  StyledLink,
  OptionsList,
  StyledIconHome,
  StyledIconTrending,
  StyledIconGaming,
  StyledIconSave,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsIconsContainer,
  ContactIconsImage,
  ContactText,
  LabelText,
} from './styledComponents'

const LeftSideBar = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {mode} = value

      return (
        <LeftContainer mode={mode}>
          <OptionsUnorderedList>
            <StyledLink to="/">
              <OptionsList>
                <StyledIconHome id="home" />
                <LabelText htmlFor="home">Home</LabelText>
              </OptionsList>
            </StyledLink>
            <StyledLink to="/treading">
              <OptionsList>
                <StyledIconTrending id="trending" />
                <LabelText htmlFor="trending">Trending</LabelText>
              </OptionsList>
            </StyledLink>
            <StyledLink to="/gaming">
              <OptionsList>
                <StyledIconGaming id="gaming" />
                <LabelText htmlFor="gaming">Gaming</LabelText>
              </OptionsList>
            </StyledLink>
            <StyledLink to="/saved-videos">
              <OptionsList>
                <StyledIconSave id="save" />
                <LabelText htmlFor="save">Saved Videos</LabelText>
              </OptionsList>
            </StyledLink>
          </OptionsUnorderedList>
          <ContactUsContainer>
            <ContactUsHeading>CONTACT US</ContactUsHeading>
            <ContactUsIconsContainer>
              <ContactIconsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <ContactIconsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />

              <ContactIconsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsIconsContainer>
            <ContactText>
              Enjoy! Now to see your channels and recomendations!
            </ContactText>
          </ContactUsContainer>
        </LeftContainer>
      )
    }}
  </BackgroundColorContext.Consumer>
)

export default LeftSideBar
