import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import MediaQuery from 'react-responsive'
import styled from '@emotion/styled'
import './styles.css'
import heroBG from './images/hero-desktop.jpg'
import heroBGMobile from './images/hero-mobile.jpg'
import trashBG from './images/trash-bg.jpg'
import beachBG from './images/beach-bg.jpg'
import logo from './images/logo-transparent.png'
import read from './images/read.png'
import listen from './images/listen.png'
import examine from './images/examine.png'
import fact1 from './images/fact-1.png'
import fact2 from './images/fact-2.jpg'
import fact3 from './images/fact-3.png'
import fact4 from './images/fact-4.png'
import fact5 from './images/fact-5.png'
import drink from './images/icon-drink.png'
import world from './images/icon-world.png'
import trash from './images/icon-trash.png'
import oil from './images/icon-oil.png'

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

const claims = [
  {
    img: fact1,
    claim: 'The recycling triangle on a container means it can be recycled.',
    fact: 'Metal and glass can be recycled whether or not they have recycling triangles on them. On some plastics and cartons, a triangle indicates the type of resin used in manufacturing, not that it can be recycled. Additionally, what types of packaging American recycling programs accept and recycle varies based on location.'
  },
  {
    img: fact2,
    claim: 'All cartons are recyclable.',
    fact: 'Cartons are actually difficult to recycle because they are composed of three layers: cardboard, plastic, and aluminum. Only about 60 percent of American recycling programs accept cartons, and some of them end up sending cartons to a landfill.'
  },
  {
    img: fact3,
    claim: 'Recycled plastic containers end up as new plastic containers.',
    fact: 'Most recycled plastic is downcycled into hard to recycle products (e.g., t-shirts and carpet), and then landfilled.'
  },
  {
    img: fact4,
    claim: 'Recycled plastic products are better for the environment.',
    fact: 'Virgin plastic, which is typically produced from petroleum, is required to make products that incorporate recycled plastic. Plastics harm the environment when made and when discarded.'
  },
  {
    img: fact5,
    claim: 'Plastic is endlessly recyclable.',
    fact: 'Metal and glass are endlessly recyclable. Plastic isn’t. It degrades, is often downcycled into an item of lower quality, and can eventually enter food and water supplies as microplastics.'
  }
]

const resources = [
  {
    img: world,
    title: 'Consumer-driven change for Earth Day',
    link: 'https://nationalconsumersleague.medium.com/consumer-driven-change-for-earth-day-1c9aaa57cdec',
  },
  {
    img: drink,
    title: 'The blight of cartons covering Vietnam’s beaches and towns',
    link: 'https://www.theguardian.com/environment/2018/dec/09/billions-discarded-tetra-pak-cover-vietnams-beaches-towns',
  },
  {
    img: trash,
    title: 'The Story of Stuff: Where your recycled plastic ends up',
    link: 'https://www.youtube.com/watch?v=urFZ5o0az_4'
  },
  {
    img: oil,
    title: 'How Big Oil misled the public into believing plastic would be recycled',
    link: 'https://www.npr.org/2020/09/11/897692090/how-big-oil-misled-the-public-into-believing-plastic-would-be-recycled'
  }
]


const Home = () => {
  useEffect(() => {

  }, []);
  const [showMore, setShowMore] = useState(false)

  return (
    <div style={{ background: '#f9f7fa' }}>
      <HeroSection bg={ trashBG }>
        <HeroSectionInner>
          <img src={logo} className="logo" alt="logo" />
          <h1><span>Facts About</span> Recycling</h1>
          <HeroBoxes>
            { boxes.map( b =>
              <Fade bottom key={ b.cta }>
              <div className="box">
                <a className="box-image" rel="noreferrer noopener" target="_blank" href={ b.link }>
                  <img src={ b.img } alt="National Consumer League"/>
                  <button>{ b.cta }</button>
                </a>
                <p className="description">{ b.description }</p>
              </div>
              </Fade>
            )}
          </HeroBoxes>
        </HeroSectionInner>
      </HeroSection>
      <VideoSection>
        <VideoSectionInner>
          <Fade bottom>
            <Title color="#fff">In the Bin and Beyond:</Title>
            <Subtitle>What Really Happens to Your Packaging After the Recycling Bin</Subtitle>
            <VideoContainer>
              <IFrameContainer>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/644067963?h=b70d79a2a7" width="640" height="360" frameborder="0" allowfullscreen></iframe>
              </IFrameContainer>
            </VideoContainer>
          </Fade>
        </VideoSectionInner>
      </VideoSection>
      <ClaimsSection>
        <Fade bottom>
          <Title marginBottom="30px" color={ colors.darkBlue }>Recycling Claims <span style={{ color: colors.red }}>Debunked</span></Title>
          {/* mobile view */}
            <ClaimsContainer>
              { claims.slice(0, showMore ? claims.length : 3 ).map( c =>
                <ClaimMobile key={ c.claim }>
                  <div className="img-container">
                    <img src={ c.img } alt="National Consumer League"/>
                  </div>
                  <p className="myth-title">Myth</p>
                  <p className="myth-description">{ c.claim }</p>
                  <p className="facts-title">Fact</p>
                  <p className="facts-description">{ c.fact }</p>
                </ClaimMobile>
              )}
            </ClaimsContainer>
          <button onClick={ () => setShowMore(!showMore) } className="see-more">{ showMore ? 'Hide Myths' : 'See More Myths'}</button>
        </Fade>
      </ClaimsSection>
      <ResourceSection>
        <Fade bottom>
          <Title marginBottom="40px" color="#fff">Additional Resources</Title>
          <ResourcesInner>
            { resources.map( r =>
              <Resource key={ r.link }>
                <img src={ r.img } alt="National Consumer League"/>
                <p>{ r.title }</p>
                <a href={ r.link } target="_blank" rel="noreferrer">Learn More</a>
              </Resource>
            )}
          </ResourcesInner>
        </Fade>
      </ResourceSection>
      <Footer>
        <a target="_blank" rel="noreferrer" href="https://nclnet.org/">
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
  background-color: #f9f7fa;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  min-height: 800px;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fbf9fc;
    z-index: -1;
  }
  @media only screen and (max-width: 700px) {
    font-size: 50px;
    justify-content: flex-start;
    height: inherit;
    background: url( ${ heroBGMobile }) no-repeat top;
    background-size: contain;
  }
`

const HeroSectionInner = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .logo {
    position: absolute;
    top: 20px;
    left: 10px;
    margin-bottom: 30px;
    width: 140px;
    @media only screen and (max-width: 700px) {
      width: 100px;
    }
  }
  h1 {
    font-size: 80px;
    font-family: 'black';
    text-align: center;
    color: ${ colors.darkBlue };
    text-transform: uppercase;
    @media only screen and (max-width: 700px) {
      font-size: 50px;
      margin-top: 70px;
    }
  }
  span {
    color: ${ colors.lightBlue };
    display: block;
    font-size: 50px;
    text-transform: initial;
    @media only screen and (max-width: 600px) {
      font-size: 35px;
    }
  }
  @media only screen and (max-width: 700px) {
    padding: 20px;
    margin-top: 0;
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
    @media only screen and (max-width: 700px) {
      margin-bottom: 40px;
    }
    @media only screen and (max-width: 600px) {
      max-width: 100%;
      margin-bottom: 40px;
    }
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
      border: 1px solid #d4d4d4;
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
    @media only screen and (max-width: 600px) {
      padding: 15px;
      width: 200px;
      font-size: 18px;
    }
  }
  .description {
    font-family: 'regular';
    color: ${ colors.darkBlue };
    text-align: center;
    margin-top: 20px;
    line-height: 1.4;
    font-size: 15px;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
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
    background: rgb(19,51,122);
    background: linear-gradient(0deg, rgba(19,51,122,1) 0%, rgba(4,24,69,1) 100%);
    opacity: 0.9;
  }
  @media only screen and (max-width: 700px) {
    background: ${ colors.darkBlue };
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
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`

const VideoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
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
  margin-bottom: ${ props => props.marginBottom };
  font-family: 'black';
  text-align: center;
  font-size: 50px;
  line-height: 1.4;
  @media only screen and (max-width: 700px) {
    font-size: 30px;
  }
`

const Subtitle = styled.h3`
  text-align: center;
  font-family: 'medium';
  color: #fff;
  font-size: 25px;
  margin-top: 5px;
  line-height: 1.4;
  @media only screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const ClaimsSection = styled.div`
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .see-more {
    background: none;
    border: none;
    font-family: 'regular';
    text-decoration: underline;
    color: ${ colors.darkBlue };
    font-size: 17px;
    cursor: pointer;
  }
`

const ClaimsContainer = styled.div`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (max-width: 700px) {
    margin-top: 20px;
  }
`

const Claim = styled.div`
  background: rgb(19,51,122);
  background: linear-gradient(95deg, rgba(19,51,122,1) 0%, rgba(187,11,14,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border-radius: 4px;
  p {
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 'regular';
    text-align: left;
    padding: 20px;
    line-height: 1.4;
    width: 50%;
    font-size: 15px;
  }
  .claim {
    font-family: 'black';
    font-size: 18px;
    min-height: 100px;
  }
  .img-container {
    width: 200px;
    position: relative;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    border-radius: 100px;
    border: 3px solid #fff;
    top: -50%;
    transform: translate(0,-50%);
  }
`

const ClaimTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'regular';
  text-transform: uppercase;
  font-size: 23px;
  margin-bottom: 10px;
  @media only screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`

const ClaimMobile = styled.div`
  diplay: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
  max-width: 270px;
  margin: 0 10px;
  background: rgb(19,51,122);
  background: linear-gradient(180deg, #041846 0%, #13337a 100%);
  padding: 30px 20px;
  color: #fff;
  margin-bottom: 50px;
  .myth-title,
  .facts-title {
    color: ${ colors.lightBlue };
    font-family: 'black';
    font-size: 20px;
    margin-bottom: 10px;
  }
  .myth-description,
  .facts-description {
    font-family: 'regular';
    line-height: 1.4;
    font-size: 16px;
  }
  .myth-description {
    min-height: 50px;
    border-bottom: 1px solid #6daedf;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .img-container {
    margin-top: -60px;
    margin-bottom: 20px;
  }
  .img-container img{
    width: 130px;
    border-radius: 100px;
    border: 2px solid #fff;
  }
  .divider-line {
    width: 100%;
    height: 2px;
    background: #fff;
    margin: 20px 0;
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    max-width: 100%;
  }
`

const ResourceSection = styled.div`
  background: url( ${ beachBG }) no-repeat top;
  background-size: cover;
  padding: 50px 20px;
  position: relative;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
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
    background: rgb(19,51,122);
    background: linear-gradient(0deg, rgba(19,51,122,1) 0%, rgba(4,24,69,1) 100%);
    opacity: 0.9;
  }
  @media only screen and (max-width: 600px) {
    background: ${ colors.darkBlue };
  }
`

const ResourcesInner = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const Resource = styled.div`
  text-align: center;
  width: 21%;
  p {
    font-family: 'regular';
    color: #fff;
    line-height: 1.4;
    @media only screen and (max-width: 700px) {
      max-width: 280px;
    }
  }
  img {
    height: 70px;
    margin-bottom: 20px;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 5px;
    color: #fff;
    font-family: 'medium';
    @media only screen and (max-width: 700px) {
      text-decoration: none;
      background: #fff;
      color: ${ colors.darkBlue };
      padding: 15px;
      width: 180px;
      border-radius: 4px;
    }
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 70px;
  }
`

const Footer = styled.footer`
  background: #fff;
  text-align: center;
  padding: 20px;
  a {
    color: ${ colors.darkBlue };
    font-family: 'medium';
    margin-bottom: 10px;
    display: inline-block;
  }
  p {
    color: ${ colors.lightBlue };
    font-size: 14px;
    line-height: 1.4;
    font-family: 'regular';
  }
`


export default Home
