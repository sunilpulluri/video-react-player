import './index.css'
import ReactPlayer from 'react-player'

const videoURL = 'https://www.youtube.com/watch?v=kv_1b9Ucr18'
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={videoURL} />
    </div>
  </div>
)

export default VideoPlayer
