import BackgroundColorContext from '../../context/BackgroundColorContext'
import {
  NoResultsImage,
  NoResultsHeading,
  NoResultsText,
  RetryButton,
  FaliureViewContainer,
} from './styledComponents'

const FailureViewRoute = () => (
  <BackgroundColorContext.Consumer>
    {value => {
      const {mode} = value
      const failureViewImage = mode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      return (
        <FaliureViewContainer mode={mode}>
          <NoResultsImage src={failureViewImage} alt="failure view" />
          <NoResultsHeading mode={mode}>
            Oops! Something Went Wrong
          </NoResultsHeading>
          <NoResultsText>
            We are having some trouble to complete your request. Please try
            again.
          </NoResultsText>
          <RetryButton>Retry</RetryButton>
        </FaliureViewContainer>
      )
    }}
  </BackgroundColorContext.Consumer>
)
export default FailureViewRoute
