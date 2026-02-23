import React from 'react'
import './Footer.css'
import pic from '../assets/pic.jpg'
import pic5 from '../assets/pic5.jpg'
import pic4 from '../assets/pic4.jpg'
import pic6 from '../assets/pic6.jpg'

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className='text'>
            <h1>Our Gallery</h1>
            <div className='line'></div>
            <p className=''>A showcase of our finest work and transformtions.Get inspired for your next visit!</p>
        </div>
        <div className='top'>
            <button className='box'>all</button>
            <button className='box'>bride</button>
            <button className='box'>hair</button>
            <button className='box'>skincare</button>
            <button className='box'>makeup</button>
            <button className='box'>mehandi</button>
            <button className='box'>threading</button>
        </div>
        <div className='bottom'>
          <div className='card'><img src= {pic}></img></div>
          <div className='card'><img src= {pic5}></img></div>
          <div className='card'><img src= {pic6}></img></div>
          <div className='card'><img src= {pic4}></img></div>

        </div>
      </div>
    </div>
  )
}

export default Footer
