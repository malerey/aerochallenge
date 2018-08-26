import React, { Component } from 'react';
import header from '../Images/header.png';

class Slider extends Component {
  
  render() {
    return (
      <div className='main-slider'>
        <div className='image-container'>
          <img src={header} alt='slider'></img>
          <div className='title'>Electronics</div>
        </div>
      </div>
    );
  }
}

export default Slider;
