import type { Video } from '@/app/shared/types'

type MovieDetailsVideoProps = {
  video: Video
}

const MovieDetailsVideo = ({ video }: MovieDetailsVideoProps) => {
  if (!video) return null

  return <iframe title={video.name} src={`https://www.youtube.com/embed/${video.key}`} allowFullScreen />
}

export default MovieDetailsVideo
