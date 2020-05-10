import React from 'react';
import StarfieldAnimation from 'react-starfield-animation'
const StarfieldBackground = () =>{
    return <StarfieldAnimation
    numParticles={400}
    style={{
      position: 'absolute',
      zIndex: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}
  />;
} 

export default StarfieldBackground;