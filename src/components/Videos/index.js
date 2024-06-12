import {format} from 'date-fns'
import {Link} from 'react-router-dom'
import BackgroundColorContext from '../../context/BackgroundColorContext'
import {
  VideoListItemContainer,
  VideoThumbNailImage,
  TitleText,
  NameTextMedium,
  NameTextSmall,
  ViewsText,
  ProfileImageContainer,
  ProfileImage,
  ViewsContainer,
  PublishedYear,
  ProfileTextContainer,
  Dot,
} from './styledComponents'

const Videos = props => {
  const {videoItem} = props
  const {publishedAt, thunbnailUrl, title, viewCount, channel, id} = videoItem
  const {name, profileImageUrl} = channel
  const publishedYear = format(new Date(publishedAt), 'yyyy')
  const noOfYears = 2021 - publishedYear

  return (
    <BackgroundColorContext.Consumer>
      {value => {
        const {mode} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoListItemContainer mode={mode}>
              <VideoThumbNailImage src={thunbnailUrl} alt="thumnail Image" />
              <ProfileImageContainer>
                <ProfileImage src={profileImageUrl} alt="profile Image" />
                <ProfileTextContainer>
                  <TitleText>{title}</TitleText>
                  <NameTextMedium>{name}</NameTextMedium>
                  <ViewsContainer>
                    <NameTextSmall>{name}</NameTextSmall>
                    <ViewsText>{viewCount} Views</ViewsText>
                    <Dot>.</Dot>
                    <PublishedYear>{noOfYears} Years ago</PublishedYear>
                  </ViewsContainer>
                </ProfileTextContainer>
              </ProfileImageContainer>
            </VideoListItemContainer>
          </Link>
        )
      }}
    </BackgroundColorContext.Consumer>
  )
}

export default Videos
