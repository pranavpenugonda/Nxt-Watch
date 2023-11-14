import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  width: 100%;
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding-top: 25px;
  padding-bottom: 25px;
`

export const NavBarMobileLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavBarWebsiteLogo = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const NavBarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  color: #f8fafc;
  text-decoration: none;
`

export const LogOutDesktopBtn = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 15px;
  padding: 8px 32px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  border: 1px solid #3b82f6;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    border: none;
    margin-left: 0px;
    padding-left: 12px;
    background-color: transparent;
  }
`
export const HeaderContSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LightDarkThemeBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  @media screen and (max-width: 767px) {
    margin-right: 5px;
  }
`
export const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 12px;
  margin-right: 12px;
`
export const PopUpCont = styled.div`
  background-color: #000000;
  background-size: cover;
  padding: 14px;
  border-radius: 8px;
  //   max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ConfirmationTxt = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`
export const ButtonsCont = styled.div`
  display: flex;
`
export const CancelBtn = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 5px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
  margin-right: 10px;
`
export const ConfirmBtn = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  border: none;
  padding: 5px;
  cursor: pointer;
  outline: none;
  background-color: #3b82f6;
  border-radius: 5px;
`
