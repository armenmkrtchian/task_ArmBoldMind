import React from 'react';
import classes from './Avatar.module.css';

// I can't download image in local space (maybe webpack config problem), but it's downloaded of internet!!!

const Avatar = props => {
  return (
    <div className={classes.avatarName} style={props.style}>
      <img
        src={props.imgPath}
        alt={props.name}  
      />
  </div>
  )
}

export default Avatar