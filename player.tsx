import React, { useEffect, useState, useRef } from 'react'
import Slider from '@mui/material/Slider';
import { VolumeDown, VolumeUp,VolumeOff } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { PlayArrow, Pause } from '@mui/icons-material';
import Box from "@mui/material/Box"

import { Howl } from 'howler';
interface PlayerProps {
  src: string;
}

Howler.html5PoolSize=100; 

export const Player: React.FC<PlayerProps> = ({ src }) => {
  const theme = useTheme();

  const [playing, setPlaying] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1.0);
  //const [seek, setSeek] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  //const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  // const seekRef=useRef<number>(0)
  const [value,setValue]=useState<number>(0);
  const soundRef = useRef<Howl>();
//  const [countPlay,setCountPlay]=useState<number>(0)

  useEffect(() => {
    soundRef.current = new Howl({
      src,
      html5: true,
      loop: false,
      preload: true,
      onplay: () => setPlaying(true),
      onpause: () => setPlaying(false),
      onstop: () => setPlaying(false),
      onload: () => handleOnLoad(),
      onend: () => handleOnEnd(),
      //onseek: () => {
        //setSeek(soundRef.current?.seek() || 0)
     // },
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [src]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(playing){
        setCurrentTime(soundRef.current?.seek() || 0);
      }
    }, 500);
  })

  const handleTogglePlay = () => {
    if (playing) {
      soundRef.current?.pause();
    } else {
      soundRef.current?.play();
    }
  };

  const handleToggleMute = () => {
    soundRef.current?.mute(!mute);
    setMute(!mute);
  };

  const handleVolumeChange = (event: any,newValue:any) => {
    console.log(newValue);
    const volume =(newValue/100);

    soundRef.current?.volume(volume);
    setVolume(newValue);
  };

  const handleSeekChange = (event: any,newValue:any) => {
    const seek = parseFloat(newValue);
  
  const duration2 = soundRef.current?.duration();
  console.log(duration);
  if (duration2) {
    setDuration(duration2)
    const time=duration2 * (seek / 100)
    setValue(seek)
    setCurrentTime(time)
    soundRef.current?.seek(time);
   // setSeek(seek);
  }
  };
  const handleChange=(event:any,newValue:any)=>{
    const seek = parseFloat(newValue);
    //   if(seekRef.current===seek){
    //   return
    // }
    setValue(seek)
  }

  const handleOnLoad = () => {
    setLoaded(true);
    setDuration(Math.round(soundRef.current?.duration() || 0));
  };

  const handleOnEnd = () => {
    soundRef.current?.unload();
    setPlaying(false);
    //setSeek(0);
    setCurrentTime(0);
  };

  return (
    
    <div className="player">
        <p className='title'>The Kim Gravel Show</p>
       <p className='title' style={{marginLeft:"5%", marginBottom:"2%"}}>This show is about women</p>
       <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleSeekChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        sx={{
          width: {
            xs: "70vw", // Set the width to 150 pixels on extra-small screens
            sm: "80vw", // Set the width to 200 pixels on small screens
            md: "50vw", // Set the width to 250 pixels on medium screens
            lg: "60vw", // Set the width to 300 pixels on large screens
            xl: "50vw", // Set the width to 350 pixels on extra-large screens
          },
          ml:5,
          mr:2,
          color:"#383336"

        }}
        
      />
       <div className='insideP' >

      <button className="player__button" onClick={handleTogglePlay}>
        {playing ? <Pause  style={{color:"#e6dee3"}}/>: <PlayArrow style={{color:"#e6dee3"}} />}
      </button>
      <span className="player__time">
      {secondsToTime(currentTime)} / {secondsToTime(duration)}
    </span>
        {/* {mute ? <VolumeMute style={{color:"#383336"}}  onClick={handleToggleMute}/> :<VolumeUp style={{color:"#383336"}}  onClick={handleToggleMute}/>} */}
     
    
      <Box className='volume' >
      <Box className={"volumeIcon"}>
      {volume<10?<VolumeOff/> :volume>60 ? <VolumeUp/>:<VolumeDown/>}
      </Box>
  <Slider aria-label="Volume" valueLabelDisplay="off" value={volume} onChange={handleVolumeChange}  sx={{
          width: {
            xs: 45,// Set the width to 150 pixels on extra-small screens
            sm: 50, // Set the width to 200 pixels on small screens
            md: 65, // Set the width to 250 pixels on medium screens
            lg: 85, // Set the width to 300 pixels on large screens
            xl: 100, // Set the width to 350 pixels on extra-large screens
          },
          ml:2,
          mr:2,
          color:"#383336"

        }}/>
        </Box>
        

    </div>
    </div>
  );
};
const secondsToTime = (time: number) => {
  var h = Math.floor(time / 3600).toString().padStart(2, '0'),
    m = Math.floor(time % 3600 / 60).toString().padStart(2, '0'),
    s = Math.round(time % 60).toString().padStart(2, '0');

  return h + ':' + m + ':' + s;
  // return m + ':' + s;
 }

