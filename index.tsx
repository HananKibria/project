import React, { useState,useRef,FC, useEffect } from "react"
import {Player} from '../player/player';

import { Waveform } from "@/player/waveform";
import Image from "next/image";
import Box from "@mui/material/Box"
import { relative } from "path";
import getConfig from '../lib/getConfig';
import Youtube from '../../public/youtube.svg'
import Spotify from '../../public/spotify.svg'
import Apple from '../../public/apple.svg'
import styled from 'styled-components'
import axios from "axios";
import YoutubeIcon from '../../public/icons-youtube.svg'
import SpotifyIcon from '../../public/icons-spotify.svg'
import PodcastIcon from '../../public/podcast.svg'

const StyledYoutube = styled(Youtube)`

`
const StyledSpotify = styled(Spotify)`

`
const StyledApple = styled(Apple)`

`
const StyledYoutubeIcon = styled(YoutubeIcon)`
`
const StyledSpotifyIcon = styled(SpotifyIcon)`

`
const StyledAppleIcon = styled(PodcastIcon)`
`

  
interface props{

}
const Home=(props:props)=> {
  const { publicRuntimeConfig } = getConfig();
  let youtube=publicRuntimeConfig.youtube
  let spotify=publicRuntimeConfig.spotify
  let apple=publicRuntimeConfig.apple
  let host=publicRuntimeConfig.host
  let port=publicRuntimeConfig.port

  return (
   <><div className="landingPage" >
    <Box className="middle">
    <Box
        position={"absolute"}
        width={150}
        height={100}
        marginTop={"2rem"}
        marginLeft={"3.75vw"}
      >
        <Image
          src={"/Logo.png"}
          fill
          alt=''
        ></Image>
      </Box>

    <h3 className="show">The Kim Gravel Show</h3>
    <br/>
    <h4 className="show2">Level up your life with your new confidence coach,
<br/><span className="name">Kim Gravel</span></h4>
   <Player src="https://dcs.megaphone.fm/TNM1416009546.mp3?key=5064559aa0a79a4debd38a41823819b6&request_event_id=d8577fe2-acfe-4ce7-a7a7-2af7a70b2937" />
    {/* <div className="image-container">
      <Image src={"/image.jpg"} layout="fill" className="image" />
    </div> */}
    <Box
        position={'relative'}
        width={400}
        height={300}
        marginTop={"10rem"}
        className={"photo"}
        marginRight={"10%"}
        marginLeft={"auto"}
      >
        <Image
          src={"/image.jpg"}
          fill
          alt=''
        ></Image>
      </Box>
      
    </Box>
    <div className="buttons">
      
      <div className="youtubeButton">
      <StyledYoutube onClick={()=>window.location.href=youtube}  />
      </div>
      <div className="spotifyButton">
      <StyledSpotify onClick={()=>window.location.href=spotify} />

      </div>
      <div className="appleButton">
      <StyledApple onClick={()=>window.location.href=apple}  />
      </div>
    
    </div>
    <div className="Icons">
      
    <div className="youtube">
      <StyledYoutubeIcon onClick={()=>window.location.href=youtube} viewBox="0 0 50 45"  preserveAspectRatio="xMidYMid meet" fill="red"/>
    </div>
    <div className="spotify">
      <StyledSpotifyIcon  onClick={()=>window.location.href=spotify}   viewBox="2 2 50 50"  preserveAspectRatio="xMidYMid meet"/>
    </div>
      <div className="apple"> 
      <StyledAppleIcon onClick={()=>window.location.href=apple} viewBox="0 0 185 160"  preserveAspectRatio="xMidYMid meet"/>
      </div>
      
   

    </div>
    <Box
        position={'relative'}
        width={350}
        height={250}
        className={"photoSmall"}
        marginLeft="auto"
        marginRight={"auto"}
      >
        <Image
          src={"/image.jpg"}
          fill
          alt=''
        ></Image>
      </Box>
<Box>


      <h4 className="quote">
        It’s okay that you’re not perfect, because you’re in the perfect place to start your journey
      </h4>
      </Box>
      <Box>
      <p className="text">
        The Kim Gravel Show is a weekly podcast for women where you stop doubting and start believing in yourself. On each episode Kim tackles the topics that women care about in a way that will make you laugh, make you think, and help you see your life in a new, more positive way. Do you want real confidence that doesn’t waiver in the face of circumstances?
Do you want to stop making excuses and value yourself more than ever?
Then you’ve come to the right place.
        </p>
      </Box>
       
    </div>
    </>
  )
}
export default Home;
