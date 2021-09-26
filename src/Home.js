import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from '@emotion/styled'

import logo from './images/ncl.jpg'
import video from './images/video.mp4'
import bg1 from './images/1.jpg'
import bg2 from './images/2.jpg'
import bg3 from './images/3.jpg'
import bg4 from './images/4.jpg'
import carton from './images/carton.jpg'
import cartonS from './images/carton-s.png'
import cartonM from './images/carton-m.png'
import cartonL from './images/carton-l.png'
import hero from './images/hero.jpg'
import bottle from './images/bottle.png'
import trash from './images/trash.png'
import './styles.css'
import {
  Link
} from "react-router-dom";

const colors = {
  darkBlue: '#13337a',
  lightBlue: '#6daedf',
  red: '#ee2427',
}

const links = [
  {
    link: 'https://nclnet.org/',
    icon: trash,
    caption: 'Recycling your cartons is as easy as 1-2-3: Empty your cartons, toss them in the recycling bin, take your bin to the curb.'
  },
  {
    link: 'https://nclnet.org/',
    icon: trash,
    caption: 'Recycling your cartons is as easy as 1-2-3: Empty your cartons, toss them in the recycling bin, take your bin to the curb.'
  },
  {
    link: 'https://nclnet.org/',
    icon: trash,
    caption: 'Recycling your cartons is as easy as 1-2-3: Empty your cartons, toss them in the recycling bin, take your bin to the curb.'
  },
]

const claims = [
  {
    claim: 'Recycling your cartons is as easy as 1-2-3: Empty your cartons, toss them in the recycling bin, take your bin to the curb.',
    fact: 'According to Tetra Pak, carton recycling is available to 73 million U.S. households. Even if that number is accurate, it still leaves about 50 million households without any carton recycling options at all. However, even in areas which offer curbside pickup for cartons, those cartons are not typically processed locally, but instead baled and shipped thousands of miles to specialized facilities in Mexico and elsewhere, or simply landfilled.',
    bg: bg1,
  },
  {
    claim: 'The principles of circularity are at the very heart of the carton business.',
    fact: 'Cartons are broken down into separate materials, including paper, plastic and aluminum, and from there can be turned into paper towels and other single-use paper products or building materials such as ceiling and wallboard. This is not, by definition, a circular economy, but instead a manufacture of single-use products out of leftover material. Cartons require virgin materials to be constructed, and recycled cartons do not end up back on the shelf as new ones.',
    bg: bg2,
  },
  {
    claim: 'Around the world, one million tons of used beverage cartons are recycled every year.',
    fact: 'Various estimates have found that cartons are recycled at an extremely low rate, likely below 20 percent, which is even worse than plastic. For the one million tons of recaptured cartons, hundreds of millions are going to the landfill. Tetra Pak alone produces more than 300 billion new food and beverage cartons annually and has become the largest food and beverage packaging company in the world.',
    bg: bg3,
  },
  {
    claim: 'Cartons produce five times less overall climate impact than other forms of packaging.',
    fact: 'Carton industry claims about reduced emissions relative to other forms of packaging examine only the cost of new containers and ignore the emissions reduction benefits of recycled containers. In short, the end-of-life portion of the life cycle is completely ignored. If assessments do not examine emissions based on current recycling rates and recycled material inputs, they do not accurately reflect the climate change impact of various container types.',
    bg: bg4,
  },
]

const Home = () => {
  const [showFact, setShowFact] = useState(Array(4).fill(false))
  const [cartonSPos, setCartonSPos] = useState(0)
  const [cartonMPos, setCartonMPos] = useState(0)
  const [cartonLPos, setCartonLPos] = useState(-200)

  useEffect(() => {
    window.onscroll = () => {
      if ( window.pageYOffset < 400 ) {
        setCartonSPos( - window.pageYOffset)
      }
      if ( window.pageYOffset > 600 ) {
      setCartonLPos( window.pageYOffset)
    }
      setCartonMPos( window.pageYOffset)
    }
  }, []);

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
      <HeroSection bg={ hero }>
        <img src={logo} className="logo" alt="logo" />
        <HeroSectionInner>
          <h1><span>Truth About</span> Recycling</h1>
          <div className="video-container">
            <video playsInline autoPlay muted loop src={ video } type="video/mp4"/>
            <img className="background" src={ bottle } alt="National Consumer League"/>
            <button><Link to="/watch">Watch Now</Link></button>
          </div>
        </HeroSectionInner>
      </HeroSection>
      <LinksContainer bg={ bg1 }>
        <SectionContainerInner>
          <h2>Discover More</h2>
          <LinkBoxes>
            { links.map( (l, i) =>
              <LinkBox key={ i }>
                <img src={ l.icon } alt="recycle icon"/>
                <p>{ l.caption }</p>
                <a target="_blank" href={ l.link }>Read More</a>
              </LinkBox>
            )}
          </LinkBoxes>
        </SectionContainerInner>
      </LinksContainer>
      <SectionContainer bg={ carton }>
        <CartonM scrollPosition={ cartonMPos } src={ cartonM }/>
        <CartonL scrollPosition={ cartonLPos } src={ cartonL }/>
        <SectionContainerInner>
          <h2 className="section-heading">Recycling claims debunked</h2>
          <div className="cards-container">
            { claims.map( (c, i) =>
              <Card showFact={ showFact[i] } background={ c.bg }>
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
              </Card>
            )}
          </div>
        </SectionContainerInner>
      </SectionContainer>
      <Footer>
        <a target="_blank" href="https://nclnet.org/">
          National Consumers League
        </a>
        <p>For confidence and safety in the marketplace since 1899.</p>
      </Footer>
    </div>
  )
}


const SectionContainer = styled.div`
overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url(${ props => props.bg }) no-repeat left bottom;
  background-size: 700px; */
  position: relative;
  z-index: 1;
`

const HeroSection = styled.div`
  background: url( ${ props => props.bg }) no-repeat top;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  .logo {
    width: 150px;
    position: absolute;
    top: 20px;
    left: 10px;
  }
`

const HeroSectionInner = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  h1 {
    font-size: 100px;
    font-family: 'black';
    color: ${ colors.darkBlue };
    text-transform: uppercase;
  }
  span {
    color: ${ colors.lightBlue };
    display: block;
    font-size: 60px;
    text-transform: initial;
  }
  .video-container {
    position: relative;
    width: 700px;
  }
  img {
    width: 100%;
  }
  video {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateX(0) translateY(-50%);
    width: 400px;
    height: auto;
    overflow: hidden;
    z-index: 1;
  }
  button {
    cursor: pointer;
    position: absolute;
    left: 0;
    background: ${ colors.red };
    border: none;
    padding: 10px;
    color: #fff;
    font-family: 'black';
    z-index: 100;
    top: 50%;
  }
`

const LinksContainer = styled.div`
  background: url( ${ props => props.bg }) no-repeat top fixed;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  h2 {
    text-align: center;
    margin-bottom: 70px;
    color: #fff;
    font-family: 'black';
    font-size: 50px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${ colors.darkBlue };
    z-index: -1;
    opacity: 0.6;
  }
`

const LinkBoxes = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkBox = styled.div`
  text-align: center;
  color: #fff;
  font-family: 'regular';
  line-height: 1.4;
  max-width: 29%;
  img {
    height: 70px;
    margin-bottom: 20px;
  }
  a {
    font-family: 'black';
    color: #fff;
    margin-top: 10px;
    display: inline-block;
  }
`

const CartonS = styled.img`
  position: absolute;
  width: 250px;
  z-index: 1;
  transition: 0.5s ease-in-out all;
  bottom: -100px;
  transform: ${ props => `translate(0, ${ - props.scrollPosition }px) rotate(${ props.scrollPosition / 5 }deg)`};
`

const CartonM = styled.img`
  position: absolute;
  width: 300px;
  z-index: 1;
  left: -20px;
  filter: blur(2px);
  bottom: -400px;
  transition: 1s ease-in-out all;
  transform: translate(0, ${ props => - (props.scrollPosition/3)}px) rotate(20deg);
`

const CartonL = styled.img`
  position: absolute;
  width: 180px;
  z-index: 1;
  right: 20px;
  bottom: 0;
  transition: 0.7s ease-in-out all;
  transform: translate(0, ${ props => - (props.scrollPosition/5)}px) rotate(-20deg) scaleX(-1);
`
// https://www.shutterstock.com/image-photo/recycling-bins-paper-plastic-glass-metal-499703881
const SectionContainerInner = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 100px 20px;
  .section-heading {
  	font-size: 30px;
  	color: ${ colors.darkBlue };
  	margin-bottom: 20px;
    font-family: 'black';
  }
`

const Card = styled.div`
  background: url( ${ props => props.background }) no-repeat center;
  background-size: cover;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
  position: relative;
  color: #fff;
  font-family: 'regular';
  padding: 25px;
  width: 48%;
  height: 250px;
  margin-bottom: 20px;
  line-height: 1.4;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: ${ props => props.showFact ? '14px' : '18px' };
  transition: 0.2s ease-in-out opacity;
  .claim {
  	color: ${ colors.lightBlue };
  	text-transform: uppercase;
  	font-size: 12px;
  	font-family: 'black';
  	margin-bottom: 5px;
  }
  .claim-button {
  	border: none;
  	border-radius: 3px;
  	letter-spacing: 1px;
  	font-family: 'regular';
  	padding: 5px 10px;
  	cursor: pointer;
  	text-transform: uppercase;
  	margin-top: 20px;
  }
  &:after {
    content: '';
    transition: 0.2s ease-in-out opacity;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: ${ colors.darkBlue };
    opacity: ${ props => props.showFact ? 1 : 0.5 };
    position: absolute;
    z-index: -1;
  }
`

const Footer = styled.footer`
  background: ${ colors.darkBlue };
  text-align: center;
  padding: 10px;
  a {
    color: ${ colors.lightBlue };
    font-family: 'medium';
    margin-bottom: 10px;
    display: inline-block;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-family: 'light';
  }
`


export default Home
