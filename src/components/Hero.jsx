import React from 'react'
import Herovideo from '../assets/herovideo.mp4'

function Hero() {
  return (
    <div className='videohero text-center'>
      <video src={ Herovideo } autoPlay loop muted/>
        <p className='upto'>Up to 80% Off</p>
        <button className='button-31'>SHOP NOW!</button>
    </div>
  )
}

export default Hero
