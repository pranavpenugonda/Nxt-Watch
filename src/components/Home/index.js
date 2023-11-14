import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import HomeVideoCard from '../HomeVideoCard'
import FailureView from '../FailureView'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeCont,
  PremiumCont,
  WebsiteLogo,
  HeadingPremium,
  BtnPremium,
  MainContainer,
  CloseBtn,
  SearchContainer,
  InputEl,
  SearchBtn,
  HomeSubCont,
  LoaderContainer,
  SuccessUlViewCont,
  NoSearchResultsCont,
  NoSearchImg,
  NoSearchHeading,
  NoSearchDesc,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    closePremiumCont: false,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onRetry = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channel: eachVideo.channel,
      }))
      this.setState({
        homeVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {homeVideosList} = this.state
    const showVideosList = homeVideosList.length > 0
    return showVideosList ? (
      <div>
        <SuccessUlViewCont>
          {homeVideosList.map(eachHomeVideo => (
            <HomeVideoCard
              key={eachHomeVideo.id}
              videoDetails={eachHomeVideo}
            />
          ))}
        </SuccessUlViewCont>
      </div>
    ) : (
      <NoSearchResultsCont>
        <NoSearchImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchHeading>No Search results found</NoSearchHeading>
        <NoSearchDesc>
          Try different key words or remove search filter
        </NoSearchDesc>
        <RetryBtn type="button" onClick={this.onRetry}>
          Retry
        </RetryBtn>
      </NoSearchResultsCont>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onClosePremiumCont = () => {
    this.setState({closePremiumCont: true})
  }

  onUpdateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchInput = () => {
    this.getHomeVideos()
  }

  renderAllHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {closePremiumCont, searchInput} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          return (
            <div>
              <Header />
              <MainContainer>
                <NavigationSideBar />
                <HomeCont data-testid="home" bgColor={bgColor}>
                  <PremiumCont
                    closePremiumCont={closePremiumCont}
                    data-testid="banner"
                  >
                    <div>
                      <WebsiteLogo
                        src={
                          isDarkTheme
                            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        }
                        alt="nxt watch logo"
                      />
                      <HeadingPremium>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </HeadingPremium>
                      <BtnPremium type="button">GET IT NOW</BtnPremium>
                    </div>
                    <CloseBtn
                      type="button"
                      onClick={this.onClosePremiumCont}
                      data-testid="close"
                    >
                      <IoMdClose size={20} color="#000000" />
                    </CloseBtn>
                  </PremiumCont>
                  <HomeSubCont bgColor={bgColor}>
                    <SearchContainer>
                      <InputEl
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onUpdateSearchInput}
                      />
                      <SearchBtn
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearchInput}
                      >
                        <AiOutlineSearch size={20} color="#000000" />
                      </SearchBtn>
                    </SearchContainer>
                    {this.renderAllHomeVideos()}
                  </HomeSubCont>
                </HomeCont>
              </MainContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
