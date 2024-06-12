import {
  SavedVideoThumbnailContainer,
  SavedThumbnailImage,
  SavedThumbnailTextContainer,
  SavedThumbnailTitle,
  SavedThumbnailName,
  ViewsContainer,
  ViewCountText,
  StyledDot,
  YearText,
} from './styledComponents'


const SavedVideo = props => {
  const {savedVideoDetials} = props
  const {name, thumbnailUrl, title, viewCount, years, id} = savedVideoDetials
  return (
    
          <>
            <SavedVideoThumbnailContainer>
              <SavedThumbnailImage src={thumbnailUrl} />
              <SavedThumbnailTextContainer>
                <SavedThumbnailTitle>{title}</SavedThumbnailTitle>
                <SavedThumbnailName>{name}</SavedThumbnailName>
                <ViewsContainer>
                  <ViewCountText>{`${viewCount} views`}</ViewCountText>
                  <StyledDot />
                  <YearText>{`${years} ago`}</YearText>
                </ViewsContainer>
              </SavedThumbnailTextContainer>
            </SavedVideoThumbnailContainer>
          </>
  )
}

export default SavedVideo
