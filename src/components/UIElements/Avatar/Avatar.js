import React from 'react';

// I can't download image in local space (maybe webpack config problem), but it's downloaded of internet!!!

const Avatar = props => {
  return (
    <div  style={props.style}>
      <img
        src={props.imgPath}
        alt={props.name}  
      />
  </div>
  )
}

export default Avatar