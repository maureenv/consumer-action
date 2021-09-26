import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import {
  Link
} from "react-router-dom";
import video from './images/video.mp4'


const colors = {
  darkBlue: '#13337a',
  lightBlue: '#6daedf',
  red: '#ee2427',
}


const Watch = () => {
  return (
    <Link to="/">
      <VideoContainer>
        <button>✕</button>
        <video playsInline autoPlay muted loop src={ video } type="video/mp4"/>
      </VideoContainer>
    </Link>
  )
}

const VideoContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background: ${ colors.darkBlue };
  width: 100%;
  height: 100%;
  min-height: 100vh;
  button {
    color: #fff;
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 100;
    background: ${ colors.darkBlue };
    border: none;
    border-radius: 50px;
    width: 30px;
    height: 30px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }
  }
  video {
    width: 100%;
  }
`


export default Watch
