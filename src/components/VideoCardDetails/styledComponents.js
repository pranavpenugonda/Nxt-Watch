import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const MainContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const VideoDetailViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  margin-left: 10px;
  padding-top: 30px;
  min-height: 100vh;
  width: 100%;
  margin-top: 0px;
`
