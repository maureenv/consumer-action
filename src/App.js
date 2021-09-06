import React, { useState } from 'react'
import logo from './images/logo-green-white.png'
import video from './images/video.mp4'
import bg1 from './images/2.jpg'
import './styles.css'

const claims = [
  {
    claim: 'Recycling your cartons is as easy as 1-2-3: Empty your cartons, toss them in the recycling bin, take your bin to the curb.',
    fact: 'According to Tetra Pak, carton recycling is available to 73 million U.S. households. Even if that number is accurate, it still leaves about 50 million households without any carton recycling options at all. However, even in areas which offer curbside pickup for cartons, those cartons are not typically processed locally, but instead baled and shipped thousands of miles to specialized facilities in Mexico and elsewhere, or simply landfilled.',
    bg: require( './images/2.jpg' ),
  },
  {
    claim: 'The principles of circularity are at the very heart of the carton business.',
    fact: 'Cartons are broken down into separate materials, including paper, plastic and aluminum, and from there can be turned into paper towels and other single-use paper products or building materials such as ceiling and wallboard. This is not, by definition, a circular economy, but instead a manufacture of single-use products out of leftover material. Cartons require virgin materials to be constructed, and recycled cartons do not end up back on the shelf as new ones.',
    bg: require( './images/2.jpg' ),
  },
  {
    claim: 'Around the world, one million tons of used beverage cartons are recycled every year.',
    fact: 'Various estimates have found that cartons are recycled at an extremely low rate, likely below 20 percent, which is even worse than plastic. For the one million tons of recaptured cartons, hundreds of millions are going to the landfill. Tetra Pak alone produces more than 300 billion new food and beverage cartons annually and has become the largest food and beverage packaging company in the world.',
    bg: require( './images/2.jpg' ),
  },
  {
    claim: 'Cartons produce five times less overall climate impact than other forms of packaging.',
    fact: 'Carton industry claims about reduced emissions relative to other forms of packaging examine only the cost of new containers and ignore the emissions reduction benefits of recycled containers. In short, the end-of-life portion of the life cycle is completely ignored. If assessments do not examine emissions based on current recycling rates and recycled material inputs, they do not accurately reflect the climate change impact of various container types.',
    bg: require( './images/2.jpg' ),
  },
]

const App = () => {
  const [showFact, setShowFact] = useState(Array(4).fill(false))

  const onShowFact = index => {
    const newArray = [...showFact]
    newArray[index] = true
    setShowFact( newArray )
  }

  const onShowClaim = index => {
    const newArray = [...showFact]
    newArray[index] = false
    setShowFact( newArray )
  }

  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <div className="hero-video">
        <div className="video-container">
          <video playsInline autoPlay muted loop src={ video } type="video/mp4"/>
        </div>
        <div className="hero-copy">
          <h1>Are cartons actually recyclable?</h1>
          <h2>Cartons are marketed as recyclable but treated by recycling programs as garbage...</h2>
          <button className="cta">Learn the truth</button>
        </div>
      </div>
      <div className="section-container">
        <div className="section-container__inner">
          <h2 className="section-heading">Carton claims debunked</h2>
          <div className="cards-container">
            { claims.map( (c, i) =>
              <div className={ showFact[i] ? 'fact-card' : 'claim-card' } style={{ backgroundImage: c.bg }}>
              { showFact[i] ?
                <>
                  <p className="claim">Fact</p>
                  <p>{ c.fact }</p>
                  <button onClick={ () => onShowClaim( i ) } className="claim-button">See Claim</button>
                </>
                :
                <>
                  <p className="claim">Claim</p>
                  <p>{ c.claim }</p>
                  <button onClick={ () => onShowFact( i ) } className="claim-button">See Fact</button>
                </>
              }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
