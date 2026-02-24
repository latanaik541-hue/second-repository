import React from 'react'
import './Header.css';
import { MdStarRate } from "react-icons/md";
import profile from '../assets/profile.jpg';
import { RiDoubleQuotesR } from "react-icons/ri";



const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='text'>
            <h1>What Clients Say!</h1>
            <div className='line'></div>
            <p>Subcribe to GlowNest YouTube channel to watch more videos.</p>
        </div>
        <div className='cards'>
        <div className='card1'>
        <div className='circle'><img src={profile}/></div>   
            <div className='quote1'><RiDoubleQuotesR /></div>
            <p className='text2'>
               Absolutely loved my experience!<br></br>
               My hair has my never locked better. 
            </p>
            <h3 className='name'>Sarah L.</h3>
            <div className='star'><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
        </div>
         <div className='card2'>
          <div className='circle1'><img src={profile}></img></div>
            
            <p className='quote'><RiDoubleQuotesR /></p>
            <p className='text1'>
               The most relaxing facial ever.<br></br>
               My skin is glowing!
            </p>
            <h3 className='name'>Jessica M.</h3>
            <div className='star'><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
        </div>
         
          <div className='card2'>
            <div className='circle2'><img src={profile}></img></div>
            
            <p className='quote'><RiDoubleQuotesR /></p>
            <p className='text1'>
               Friendly staff and amazing service.
               Highly recommend!
            </p>
            <h3 className='name'>Emily R.</h3>
            <div className='star'><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
        
          </div>
           <div className='card2'>
            <div className='circle3'><img src={profile}></img></div>
            
            <p className='quote'><RiDoubleQuotesR /></p>
            <p className='text1'>
              I felt truely pampered from start to<br></br>
              finish.
            </p>
            <h3 className='name'>Anna K.</h3>
            <div className='star'><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></div>
        </div>
      </div>
  </div>
    </>
  )
}

export default Header
