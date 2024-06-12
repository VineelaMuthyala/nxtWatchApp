import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import LeftSideBar from '../LeftSideBar'
import Header from '../Header'
import Videos from '../Videos'
import FaliureViewRoute from '../FailureViewRoute'
import BackgroundColorContext from '../../context/BackgroundColorContext'
import {
  HomeContainer,
  HomePage,
  RightContainer,
  BannerContainer,
  BannerCloseButton,
  StyledIconClose,
  BannerTextContainer,
  BannerLogoImage,
  BannerText,
  BannerGetItButton,
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  StyledIconSearch,
  VideoListContainer,
  NoSearchResultsContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
    bannerStatus: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const {searchInput} = this.state
      const jwtToken = Cookies.get('jwt_token')
      console.log(jwtToken)
      const homeVideosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const response = await fetch(homeVideosUrl, options)
      const fetchedData = await response.json()
      const updatedVideosList = this.getUpdatedVideosList(fetchedData)
      this.setState({
        homeVideosList: updatedVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } catch (e) {
      console.log(e)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getUpdatedVideosList = fetchedData => {
    const updatedList = fetchedData.videos.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      thunbnailUrl: eachItem.thumbnail_url,
      publishedAt: eachItem.published_at,
      viewCount: eachItem.view_count,
      channel: {
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      },
    }))
    return updatedList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value}, this.getHomeVideos)
  }

  renderBannerContainerStatus = () => {
    this.setState({bannerStatus: false})
  }

  renderBannerContainer = () => {
    const {bannerStatus} = this.state
    return (
      <>
        {bannerStatus && (
          <BannerContainer>
            <BannerTextContainer>
              <BannerLogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="logo"
              />
              <BannerText>
                Buy NXT Watch Premium prepaid plans with UPI
              </BannerText>
              <BannerGetItButton type="button" data-textid="getIt">
                GET IT NOW
              </BannerGetItButton>
            </BannerTextContainer>
            <BannerCloseButton
              type="button"
              data-testid="close"
              onClick={this.renderBannerContainerStatus}
            >
              <StyledIconClose />
            </BannerCloseButton>
          </BannerContainer>
        )}
      </>
    )
  }

  renderHomeContainer = () => (
    <BackgroundColorContext.Consumer>
      {value => {
        const {mode} = value
        const {searchInput} = this.state
        return (
          <HomeVideosContainer mode={mode}>
            <SearchContainer>
              <SearchInput
                onChange={this.onChangeSearchInput}
                type="search"
                value={searchInput}
                placeholder="Search"
                mode={mode}
              />
              <SearchButton mode={mode}>
                <StyledIconSearch />
              </SearchButton>
            </SearchContainer>
            {this.renderVideosList()}
          </HomeVideosContainer>
        )
      }}
    </BackgroundColorContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderVideosListView = () => {
    const {homeVideosList} = this.state
    console.log(homeVideosList)
    if (homeVideosList.length > 0) {
      return (
        <VideoListContainer>
          {homeVideosList.map(eachItem => (
            <Videos key={eachItem.id} videoItem={eachItem} />
          ))}
        </VideoListContainer>
      )
    }
    return (
      <NoSearchResultsContainer>
        <NoResultsImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoResultsHeading>No Search results found</NoResultsHeading>
        <NoResultsText>
          Try different key words or remove search filter
        </NoResultsText>
        <RetryButton onClick={this.getHomeVideos}>Retry</RetryButton>
      </NoSearchResultsContainer>
    )
  }

  renderVideosListFailureView = () => <FaliureViewRoute />

  renderVideosList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderVideosListFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <HomePage>
              <Header />
              <HomeContainer mode={mode}>
                <LeftSideBar />
                <RightContainer mode={mode}>
                  {this.renderBannerContainer()}
                  {this.renderHomeContainer()}
                </RightContainer>
              </HomeContainer>
            </HomePage>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default Home
