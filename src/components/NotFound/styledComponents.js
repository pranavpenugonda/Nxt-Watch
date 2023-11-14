import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  margin-left: 10px;
  //   padding-top: 30px;
  min-height: 100vh;
  width: 100%;
`
export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  } ;
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
