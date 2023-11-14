import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
  }
`

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  margin-left: 10px;
  //   padding-top: 30px;
  min-height: 100vh;
  width: 100%;
`
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  } ;
`

export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  } ;
`

export const TrendingVideoList = styled.ul`
  background-color: ${props => props.bgColor};
  background-size: cover;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
