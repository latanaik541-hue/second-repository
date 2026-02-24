import React from 'react'
import './Gallery.css'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic11 from '../assets/pic11.jpg'

const Gallery = () => {
  return (
    <div>
      <div className='container'>
        <div className='text'>
            <h1>Our Gallery</h1>
            
            <p className=''>A showcase of our finest work and transformtions.Get inspired for your next visit!</p>
        </div>
        <div className='top'>
            <button className='box1'>all</button>
            <button className='box'>bride</button>
            <button className='box'>hair</button>
            <button className='box'>skincare</button>
            <button className='box'>makeup</button>
            <button className='box'>mehandi</button>
            <button className='box'>threading</button>
        </div>
        <div className='bottom'>
          <div className='cards'>
          <div className='card'><img src= {pic1}></img></div>
          <div className='card'><img src= {pic2}></img></div>
          <div className='card'><img src= {pic5}></img></div>
          <div className='card'><img src= {pic3}></img></div>
          </div>
          
          <div className='cards'>
          <div className='card'><img src= {pic4}></img></div>
          <div className='card'><img src= {pic8}></img></div>
          <div className='card'><img src= {pic6}></img></div>
          <div className='card'><img src= {pic7}></img></div>
          </div>

          <div className='cards'>
          <div className='card'><img src= {pic9}></img></div>
          <div className='card'><img src= {pic10}></img></div>
          <div className='card'><img src= {pic11}></img></div>
          <div className='card1'></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Gallery
