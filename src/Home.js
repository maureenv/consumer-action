import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled from '@emotion/styled'
import './styles.css'
import {
  Link
} from "react-router-dom"
import heroBG from './images/hero-bg.jpg'
import trashBG from './images/trash-bg.jpg'
import logo from './images/logo-transparent.png'
import read from './images/read.png'
import listen from './images/listen.png'
import examine from './images/examine.png'
const colors = {
  darkBlue: '#13337a',
  lightBlue: '#6daedf',
  red: '#ee2427',
}

const boxes = [
  {
    img: read,
    link: 'https://nclnet.org/wp-content/uploads/2020/10/NCL-Recycling-Report-Oct-2020.pdf',
    cta: 'READ',
    description: 'NCL’s report, Examining Sustainability, Consumer Choice, and Confusion in Food and Beverage Packaging'
  },
  {
    img: listen,
    link: 'https://nclnet.org/does-recycling-even-work/',
    cta: 'LISTEN',
    description: 'NCL’s “We Can Do This!” podcast episode, “Does recycling even work?”'
  },
  {
    img: examine,
    link: 'https://nclnet.org/national_recycling_day/',
    cta: 'EXAMINE',
    description: 'NCL’s infographic about how to become a savvy recycler and sustainable shopper'
  },
]


const Home = () => {
  useEffect(() => {

  }, []);
//<button><Link to="/watch">Watch Now</Link></button>

  return (
    <div>
      <HeroSection bg={ trashBG }>
        <HeroSectionInner>
          <img src={logo} className="logo" alt="logo" />
          <h1><span>Facts About</span> Recycling</h1>
          <HeroBoxes>
            { boxes.map( b =>
              <div className="box" key={ b.cta }>
                <a className="box-image" rel="noreferrer noopener" target="_blank" href="https://nclnet.org/wp-content/uploads/2020/10/NCL-Recycling-Report-Oct-2020.pdf">
                  <img src={ b.img } alt="National Consumer League"/>
                  <button>{ b.cta }</button>
                </a>
                <p className="description">{ b.description }</p>
              </div>
            )}
          </HeroBoxes>
        </HeroSectionInner>
      </HeroSection>
      <VideoSection>
        <VideoSectionInner>
          <Title color="#fff">In the Bin and Beyond:</Title>
          <Subtitle>What Really Happens to Your Packaging After the Recycling Bin</Subtitle>
          <VideoContainer>
            <IFrameContainer>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/b7GMpjx2jDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </IFrameContainer>
          </VideoContainer>
          <p className="video-footnote">Please watch the first video in an upcoming series to help consumers understand more about items thrown in the recycling bin.</p>
        </VideoSectionInner>
      </VideoSection>
      <Footer>
        <a target="_blank" href="https://nclnet.org/">
          National Consumers League
        </a>
        <p>For confidence and safety in the marketplace since 1899.</p>
      </Footer>
    </div>
  )
}

const HeroSection = styled.div`
  background: url( ${ heroBG }) no-repeat top;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  min-height: 800px;
`

const HeroSectionInner = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .logo {
    margin-bottom: 30px;
    width: 140px;
  }
  h1 {
    font-size: 80px;
    font-family: 'black';
    text-align: center;
    color: ${ colors.darkBlue };
    text-transform: uppercase;
  }
  span {
    color: ${ colors.lightBlue };
    display: block;
    font-size: 50px;
    text-transform: initial;
  }
  .video-container {
    position: relative;
    width: 700px;
  }
`

const HeroBoxes = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  .box {
    max-width: 200px;
  }
  .box-image {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    img {
      width: 100%;
      transition: 0.2s ease-in-out all;
    }
    &:hover {
      img {
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
      }
    }
  }
  button {
    border: none;
    cursor: pointer;
    margin: 0 auto;
    background: ${ colors.red };
    padding: 10px;
    display: inline-block;
    color: #fff;
    font-family: 'black';
    text-decoration: none;
    border-radius: 4px;
    width: 130px;
    text-align: center;
    margin-top: -20px;
  }
  .description {
    font-family: 'regular';
    color: ${ colors.darkBlue };
    text-align: center;
    margin-top: 20px;
    line-height: 1.4;
    font-size: 15px;
  }
`

const VideoSection = styled.div`
  background: url( ${ trashBG }) no-repeat top;
  background-size: cover;
  position: relative;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  &:after {
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${ colors.darkBlue };
    opacity: 0.75;
  }
`

const VideoSectionInner = styled.div`
  padding: 50px 20px;
  text-align: center;
  .video-footnote {
    color: #fff;
    font-size: 18px;
    margin: 0 auto;
    max-width: 700px;
    line-height: 1.4;
    text-align: center;
    font-family: 'regular';
  }
`

const VideoContainer = styled.div`
  width: 800px;
  margin: 0 auto;
`

const IFrameContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h2`
  color: ${ props => props.color };
  font-family: 'black';
  text-align: center;
  font-size: 50px;
`

const Subtitle = styled.h3`
  text-align: center;
  font-family: 'medium';
  color: #fff;
  font-size: 25px;
  margin-top: 5px;
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
