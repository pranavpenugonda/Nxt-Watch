import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const HomeCont = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  margin-left: 10px;
  //   padding-top: 30px;
  min-height: 100vh;
  width: 100%;
`
export const PremiumCont = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 210px;
  display: flex;
  width: 93%;
  padding: 30px;
  justify-content: space-between;
  display: ${props => (props.closePremiumCont ? 'none' : '')};
`
export const WebsiteLogo = styled.img`
  height: 50px;
  width: 150px;
`
export const HeadingPremium = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  //   font-weight: bold;
  font-size: 20px;
  max-width: 400px;
`
export const BtnPremium = styled.button`
  font-family: 'Roboto';
  color: #000000;
  cursor: pointer;
  border: 1px solid #000000;
  outline: none;
  background-color: transparent;
  border-radius: 5px;
`
export const CloseBtn = styled.button`
  background-color: transparent;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border: none;
  outline: none;
`
export const SearchContainer = styled.div`
  width: 400px;
  border: 1px solid #64748b;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-left: 30px;
  border-radius: 5px;
  height: 30px;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
export const InputEl = styled.input`
  width: 365px;
  background-color: #ffffff;
  padding: 5px;
  outline: none;
  border: 0px;
  margin-right: auto;
  color: #000000;
`
export const SearchBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px;
  cursor: pointer;
`
export const HomeSubCont = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  background-size: cover;
  margin-top: 0px;
  padding-left: 0px;
  margin-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const SuccessUlViewCont = styled.div`
  list-style-type: none;
  padding-top: 10px;
  padding-left: 25px;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`
export const NoSearchResultsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchImg = styled.img`
  height: 300px;
  width: 340px;
`
export const NoSearchHeading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 30px;
`
export const NoSearchDesc = styled.p`
  font-family: 'Roboto';
  color: #64748b;
`
export const RetryBtn = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-family: 'Roboto';
  padding: 15px;
  border: 0px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
`
