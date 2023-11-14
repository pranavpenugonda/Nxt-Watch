import {formatDistanceToNow} from 'date-fns'

import {
  ListVideoItem,
  ThumnailImg,
  ChannelImg,
  ListVideoSubCont,
  TitleTxt,
  NameTxt,
  VideoLink,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
    id,
  } = videoDetails
  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ListVideoItem>
      <VideoLink to={`/videos/${id}`}>
        <ThumnailImg src={thumbnailUrl} alt="video thumbnail" />
        <ListVideoSubCont>
          <ChannelImg src={channel.profile_image_url} alt="channel logo" />
          <div>
            <TitleTxt>{title}</TitleTxt>
            <NameTxt>{channel.name}</NameTxt>
            <ListVideoSubCont>
              <NameTxt>{viewCount} views</NameTxt>
              <NameTxt>{time} ago</NameTxt>
            </ListVideoSubCont>
          </div>
        </ListVideoSubCont>
      </VideoLink>
    </ListVideoItem>
  )
}

export default HomeVideoCard
