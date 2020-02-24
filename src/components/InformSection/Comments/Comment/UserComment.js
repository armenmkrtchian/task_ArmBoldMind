import React from 'react';

import classes from './UserComment.module.css';
import Avatar from '../../../UIElements/Avatar/Avatar';

const UserComment = props => {
  return (
    <div className={classes.comment}>
      <div className={classes.avatar}>
         <Avatar imgPath={props.imgPath} name={props.name}/> 
      </div>
      
      <div className={classes.nameYear}>{props.name}<span className={classes.year}>{props.year}</span></div>
     
      <div className={classes.userComment}>{props.comment}</div>
      
    </div>
  )
}

export default UserComment