import React from 'react'
import HeroContent from '../sub/HeroContent'
import Skills from './Skills'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px] left-0 z-[1] w-500 h-full object-cover">
            <source src="/blackhole.webm" type="video/webm" />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero