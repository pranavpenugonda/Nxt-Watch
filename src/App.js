import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoCardDetails from './components/VideoCardDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTabItem: 'Home',
    savedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateActiveTabItem = newTabItem => {
    this.setState({activeTabItem: newTabItem})
  }

  addVideo = video => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDarkTheme, activeTabItem, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeTabItem,
          savedVideos,
          addVideo: this.addVideo,
          toggleTheme: this.toggleTheme,
          updateActiveTabItem: this.updateActiveTabItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoCardDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
