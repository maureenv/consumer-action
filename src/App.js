import logo from './images/logo-green-white.png'
import video from './images/video.mp4'
import './styles.css'

function App() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <div className="hero-video">
        <div className="video-container">
          <video playsInline autoPlay muted loop src={ video } type="video/mp4"/>
        </div>
        <div className="hero-copy">
          <h1>Are cartons actually recyclable?</h1>
          <h2>Marketed as recyclable but treated by recycling programs as garbage and landfilled...</h2>
          <button className="cta">Learn the truth</button>
        </div>
      </div>
    </div>
  )
}


export default App;
