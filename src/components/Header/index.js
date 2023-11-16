import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'

import {BsMoon} from 'react-icons/bs'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import ThemeContext from '../../context/ThemeContext'

import {
  NavHeader,
  NavContent,
  NavBarMobileLogoContainer,
  NavBarWebsiteLogo,
  NavBarLargeContainer,
  NavLink,
  LogOutDesktopBtn,
  HeaderContSub,
  LightDarkThemeBtn,
  ProfileImg,
  PopUpCont,
  ConfirmationTxt,
  ButtonsCont,
  CancelBtn,
  ConfirmBtn,
} from './styleComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onToggleTheme = () => {
        toggleTheme()
      }
      return (
        <NavHeader isDarkTheme={isDarkTheme}>
          <NavContent>
            <NavBarMobileLogoContainer>
              <NavLink to="/">
                <NavBarWebsiteLogo
                  src={
                    !isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
              </NavLink>
              <HeaderContSub>
                <LightDarkThemeBtn
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  {!isDarkTheme ? (
                    <BsMoon size={25} />
                  ) : (
                    <FiSun color="#ffffff" size={25} />
                  )}
                </LightDarkThemeBtn>
                <GiHamburgerMenu
                  size={25}
                  color={isDarkTheme ? '#ffffff' : '#000000'}
                />
                <Popup
                  modal
                  trigger={
                    <LogOutDesktopBtn type="button" onClick={onClickLogout}>
                      <FiLogOut
                        size={25}
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                      />
                    </LogOutDesktopBtn>
                  }
                >
                  {close => (
                    <PopUpCont>
                      <ConfirmationTxt>
                        Are you sure, you want to logout?
                      </ConfirmationTxt>
                      <ButtonsCont>
                        <CancelBtn type="button" onClick={() => close()}>
                          Cancel
                        </CancelBtn>
                        <ConfirmBtn type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmBtn>
                      </ButtonsCont>
                    </PopUpCont>
                  )}
                </Popup>
              </HeaderContSub>
            </NavBarMobileLogoContainer>
            <NavBarLargeContainer>
              <NavLink to="/">
                <NavBarWebsiteLogo
                  src={
                    !isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
              </NavLink>
              <HeaderContSub>
                <LightDarkThemeBtn type="button" onClick={onToggleTheme}>
                  {!isDarkTheme ? (
                    <BsMoon size={25} />
                  ) : (
                    <FiSun size={25} color="#ffffff" />
                  )}
                </LightDarkThemeBtn>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <LogOutDesktopBtn type="button" isDarkTheme={isDarkTheme}>
                      Logout
                    </LogOutDesktopBtn>
                  }
                >
                  {close => (
                    <PopUpCont>
                      <ConfirmationTxt>
                        Are you sure,you want to logout?
                      </ConfirmationTxt>
                      <ButtonsCont>
                        <CancelBtn type="button" onClick={() => close()}>
                          Cancel
                        </CancelBtn>
                        <ConfirmBtn type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmBtn>
                      </ButtonsCont>
                    </PopUpCont>
                  )}
                </Popup>
              </HeaderContSub>
            </NavBarLargeContainer>
          </NavContent>
        </NavHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
