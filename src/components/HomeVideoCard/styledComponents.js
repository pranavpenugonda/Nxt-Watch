import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ListVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 5px;
  cursor: pointer;
`
export const ThumnailImg = styled.img`
  height: 160px;
  width: 250px;
`
export const ChannelImg = styled.img`
  height: 30px;
  width: 30px;
`
export const ListVideoSubCont = styled.div`
  display: flex;
`
export const TitleTxt = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 14px;
  font-weight: bold;
`
export const NameTxt = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  margin-right: 10px;
`
export const VideoLink = styled(Link)`
  text-decoration: none;
`
