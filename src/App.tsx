import { useRef, useEffect, useState } from "react"
import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import SmoothContainer from "./components/SmoothContainer"
import SocialMedia from "./components/SocialMedia"
import bg_music from './assets/bg_music.mp3'

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(bg_music);
      audio.loop = true;
      audio.volume = 0.05;
      audioRef.current = audio;
    }

    const playAudio = async () => {
      try {
        await audioRef.current!.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Failed to play audio:', error);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-between p-16">
      <Introduction
        toggleAudio={toggleAudio}
        isPlaying={isPlaying}
      />
      <SmoothContainer>
        <SocialMedia />
        <Projects />
      </SmoothContainer>
    </div>
  )
}

export default App