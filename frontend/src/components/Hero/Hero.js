import React from 'react'
import './Hero.css'
// import latest from '../assets/latest.jpg'
// import arrow from '../assets/arrow.jpg'
import hand from '../assets/handicon.png'
import collect from '../assets/collection.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand} alt=''/>
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection </div>
                {/* <img src={arrow} alt=''/> */}
            </div>

        </div>
        <div className='hero-right'>
            <img src={collect} alt=''/>
            
        </div>
       
    </div>
  )
}

export default Hero;
