import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FailureViewRoute from '../FailureViewRoute'
import LeftSideBar from '../LeftSideBar'

import {
  VideoItemDetailsView,
  VideoItemContainer,
  VideoItemDetailsContainer,
  TitleText,
  ViewsAndLikesContainer,
  ViewsContainer,
  ViewCountText,
  YearText,
  LikesContainer,
  StyledLikeIcon,
  StyledDisLikeIcon,
  StyledSaveIcon,
  StyledSpan,
  ReactPlayerContainer,
  ReactPlayerVideo,
  ProfileChannelConatiner,
  ChannelContainer,
  ProfileImage,
  ProfileTextConatiner,
  ProfileTextName,
  ProfileTextsubscriberCount,
  ProfileTextDescriptionLarge,
  ProfileTextDescriptionSmall,
  StyledIconContainer,
  StyledIconContainerDisLike,
  StyledIconContainerSave,
  StyledIconContainerSaved,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    likeColor: false,
    dislikeColor: false,
    saveButton: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getUpdatedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
  })

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    try {
      const {match} = this.props
      const {params} = match
      const {id} = params
      console.log(id)
      const jwtToken = Cookies.get('jwt_token')
      const videoDetailsUrl = `https://apis.ccbp.in/videos/${id}`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }

      const response = await fetch(videoDetailsUrl, options)
      const fetchedVideoData = await response.json()
      console.log('fetched', fetchedVideoData)
      const updatedVideoData = this.getUpdatedData(
        fetchedVideoData.video_details,
      )
      console.log('updated', updatedVideoData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedVideoData,
      })
    } catch (e) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoItemDetailsLoading = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderVideoItemDetailsSuccess = () => (
    <BackgroundColorContext.Consumer>
      {value => {
        const {mode, onClickSaveButton} = value
        const {videoDetails, likeColor, dislikeColor, saveButton} = this.state
        const {
          description,
          id,
          publishedAt,
          thumbnailUrl,
          title,
          videoUrl,
          viewCount,
          channel,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const yearsAgo = formatDistanceToNow(new Date(2021, 8, 20))
        const years = yearsAgo.slice(-8)

        const onClickLikeColorBtn = () => {
          this.setState(prevState => ({likeColor: !prevState.likeColor}))
        }
        const onClickLikeDisLikeColorBtn = () => {
          this.setState(prevState => ({dislikeColor: !prevState.dislikeColor}))
        }
        const onClickSaveBtn = () => {
          const savedItem = {name, thumbnailUrl, title, viewCount, years, id}
          this.setState(prevState => ({saveButton: !prevState.saveButton}))
          onClickSaveButton(savedItem)
        }

        return (
          <VideoItemDetailsContainer mode={mode}>
            <ReactPlayerContainer>
              <ReactPlayerVideo url={videoUrl} width="100%" height="100%" />
            </ReactPlayerContainer>

            <TitleText mode={mode}>{title}</TitleText>
            <ViewsAndLikesContainer>
              <ViewsContainer>
                <ViewCountText>{`${viewCount} views`}</ViewCountText>
                <YearText>{`${years} ago`}</YearText>
              </ViewsContainer>
              <LikesContainer>
                <StyledIconContainer
                  onClick={onClickLikeColorBtn}
                  likeColor={likeColor}
                  mode={mode}
                  type="button"
                >
                  <StyledLikeIcon />
                  <StyledSpan>Like</StyledSpan>
                </StyledIconContainer>
                <StyledIconContainerDisLike
                  mode={mode}
                  onClick={onClickLikeDisLikeColorBtn}
                  dislikeColor={dislikeColor}
                  type="button"
                >
                  <StyledDisLikeIcon />
                  <StyledSpan>DisLike</StyledSpan>
                </StyledIconContainerDisLike>
                {saveButton ? (
                  <StyledIconContainerSaved
                    mode={mode}
                    onClick={onClickSaveBtn}
                    type="button"
                  >
                    <StyledSaveIcon />
                    <StyledSpan>Saved</StyledSpan>
                  </StyledIconContainerSaved>
                ) : (
                  <StyledIconContainerSave
                    mode={mode}
                    onClick={onClickSaveBtn}
                    type="button"
                  >
                    <StyledSaveIcon />
                    <StyledSpan>Save</StyledSpan>
                  </StyledIconContainerSave>
                )}
              </LikesContainer>
            </ViewsAndLikesContainer>
            <hr width="900px" />
            <ProfileChannelConatiner>
              <ChannelContainer>
                <ProfileImage src={profileImageUrl} alt="profile Image" />
                <ProfileTextConatiner>
                  <ProfileTextName mode={mode}>{name}</ProfileTextName>
                  <ProfileTextsubscriberCount>
                    {`${subscriberCount} subscribers`}
                  </ProfileTextsubscriberCount>
                  <ProfileTextDescriptionLarge mode={mode}>
                    {description}
                  </ProfileTextDescriptionLarge>
                </ProfileTextConatiner>
              </ChannelContainer>
              <ProfileTextDescriptionSmall mode={mode}>
                {description}
              </ProfileTextDescriptionSmall>
            </ProfileChannelConatiner>
          </VideoItemDetailsContainer>
        )
      }}
    </BackgroundColorContext.Consumer>
  )

  renderVideoItemDetailsFailure = () => <FailureViewRoute />

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderVideoItemDetailsLoading()
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccess()
      case apiStatusConstants.failure:
        return this.renderVideoItemDetailsFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemDetailsView>
        <Header />
        <VideoItemContainer>
          <LeftSideBar />
          {this.renderVideoItemDetails()}
        </VideoItemContainer>
      </VideoItemDetailsView>
    )
  }
}

export default VideoItemDetails
