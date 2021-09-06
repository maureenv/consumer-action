import logo from './images/logo-green-white.png'
import video from './images/video.mp4'
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <div className="hero-video">
        <div className="video-container">
          <video playsInline autoPlay muted loop src={ video } type="video/mp4"/>
        </div>
      </div>
    </div>
  )
}


export default App;
