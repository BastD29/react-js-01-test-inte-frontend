import React from 'react';

import img1 from '../assets/img-background-1.jpg';
import img2 from '../assets/img-background-2.jpg';
import img3 from '../assets/img-background-3.jpg';

export default function Background() {
  return (
    <div className='slideshow'>
        <div className='slideshow-image' style={{"backgroundImage": `url(${img1})`}}></div>
        <div className='slideshow-image' style={{"backgroundImage": `url(${img2})`}}></div>
        <div className='slideshow-image' style={{"backgroundImage": `url(${img3})`}}></div>
    </div>
  )
}
