import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import BackgroundColorContext from './context/BackgroundColorContext'
import Videos from './components/Videos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosRoute from './components/SavedVideoRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {mode: true, savedList: []}

  changeBackgroundColor = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  onClickSaveButton = savedItem => {
    console.log('savedItem', savedItem)
    this.setState(prevState => ({
      savedList: [...prevState.savedList, savedItem],
    }))
  }

  render() {
    const {mode, savedList} = this.state
    return (
      <BackgroundColorContext.Provider
        value={{
          mode,
          changeBackgroundColor: this.changeBackgroundColor,
          onClickSaveButton: this.onClickSaveButton,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos" component={Videos} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </BackgroundColorContext.Provider>
    )
  }
}

export default App
