import {Component} from 'react'
import Header from '../Header'
import SavedVideo from '../SavedVideo'
import LeftSideBar from '../LeftSideBar'
import {
  SavedVideosPage,
  SavedVideoContainer,
  SavedVideoHeadingContainer,
  SavedVideoHeading,
  StyledIconConatiner,
  StyledIconSave,
} from './styledComponents'
import BackgroundColorContext from '../../context/BackgroundColorContext'

class SavedVideoRoute extends Component {
  render() {
    return (
      <BackgroundColorContext.Consumer>
        {value => {
          const {mode, savedList} = value

          return (
            <>
              <Header />
              <SavedVideosPage>
                <LeftSideBar />
                <SavedVideoContainer mode={mode}>
                  <SavedVideoHeadingContainer mode={mode}>
                    <StyledIconConatiner mode={mode}>
                      <StyledIconSave id="saved" />
                    </StyledIconConatiner>
                    <SavedVideoHeading htmlFor="saved" mode={mode}>
                      Saved Videos
                    </SavedVideoHeading>
                  </SavedVideoHeadingContainer>
                  {savedList.map(eachItem => (
                    <SavedVideo
                      key={eachItem.id}
                      savedVideoDetials={eachItem}
                    />
                  ))}
                </SavedVideoContainer>
              </SavedVideosPage>
            </>
          )
        }}
      </BackgroundColorContext.Consumer>
    )
  }
}

export default SavedVideoRoute
