import ThemeContext from '../../context/ThemeContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingVideosAndDate,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <GamingListItem>
            <ItemLink to={`/videos/${id}`}>
              <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingVideosAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingVideosAndDate>
              </GamingContentSection>
            </ItemLink>
          </GamingListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GameVideoCard
