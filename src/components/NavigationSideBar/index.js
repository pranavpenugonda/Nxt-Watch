import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {
  NavigationSideBarMainCont,
  NavLink,
  NavUlListCont,
  ListItem,
  ListItemTxt,
  NavigationSideBarBottomCont,
  ContactusHeading,
  SocialMediaLogo,
  SocialMediaCont,
  Description,
} from './styledComponents'

class NavigationSideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTabItem, updateActiveTabItem, isDarkTheme} = value

          const onClickOptionHome = () => {
            updateActiveTabItem('Home')
          }

          const onClickOptionTrending = () => {
            updateActiveTabItem('Trending')
          }

          const onClickOptionGaming = () => {
            updateActiveTabItem('Gaming')
          }
          const onClickOptionSaved = () => {
            updateActiveTabItem('Saved')
          }

          return (
            <NavigationSideBarMainCont isDarkTheme={isDarkTheme}>
              <NavUlListCont>
                <NavLink to="/">
                  <ListItem
                    key="home"
                    isActive={activeTabItem === 'Home'}
                    onClick={onClickOptionHome}
                  >
                    <AiFillHome
                      size={20}
                      color={activeTabItem === 'Home' ? '#ff0000' : '#64748b'}
                    />
                    <ListItemTxt>Home</ListItemTxt>
                  </ListItem>
                </NavLink>
                <NavLink to="/trending">
                  <ListItem
                    key="trending"
                    isActive={activeTabItem === 'Trending'}
                    onClick={onClickOptionTrending}
                  >
                    <HiFire
                      size={20}
                      color={
                        activeTabItem === 'Trending' ? '#ff0000' : '#64748b'
                      }
                    />
                    <ListItemTxt>Trending</ListItemTxt>
                  </ListItem>
                </NavLink>
                <NavLink to="/gaming">
                  <ListItem
                    key="gaming"
                    isActive={activeTabItem === 'Gaming'}
                    onClick={onClickOptionGaming}
                  >
                    <SiYoutubegaming
                      size={20}
                      color={activeTabItem === 'Gaming' ? '#ff0000' : '#64748b'}
                    />
                    <ListItemTxt>Gaming</ListItemTxt>
                  </ListItem>
                </NavLink>
                <NavLink to="/saved-videos">
                  <ListItem
                    key="saved"
                    isActive={activeTabItem === 'Saved'}
                    onClick={onClickOptionSaved}
                  >
                    <MdPlaylistAdd
                      size={20}
                      color={activeTabItem === 'Saved' ? '#ff0000' : '#64748b'}
                    />
                    <ListItemTxt>Saved videos</ListItemTxt>
                  </ListItem>
                </NavLink>
              </NavUlListCont>
              <NavigationSideBarBottomCont>
                <ContactusHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactusHeading>
                <SocialMediaCont>
                  <SocialMediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaCont>
                <Description isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </NavigationSideBarBottomCont>
            </NavigationSideBarMainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavigationSideBar
