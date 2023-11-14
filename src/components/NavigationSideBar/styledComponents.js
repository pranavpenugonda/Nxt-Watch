import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavigationSideBarMainCont = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ffffff')};
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    max-height: 100px;
    min-height: 100px;
    width: 100%;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavUlListCont = styled.ul`
  list-style-type: none;
  @media screen and (max-width: 767px) {
    display: flex;
    padding-left: 0px;
  }
`
export const ListItem = styled.li`
  display: flex;
  //   justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? '#94a3b8' : 'transparent')};
  padding: 7px;
  border-radius: 5px;
`
export const ListItemTxt = styled.h1`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 15px;
  margin-left: 15px;
`
export const NavigationSideBarBottomCont = styled.div`
  padding-left: 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactusHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 15px;
`
export const SocialMediaCont = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 8px;
  cursor: pointer;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-weight: bold;
  max-width: 150px;
`
