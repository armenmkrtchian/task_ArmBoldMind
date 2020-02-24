import React from 'react';

import classes from './Share.module.css';

const Share = () => {
  return (
    <div>
      <p className={classes.share}>Share this project in social</p>
      <div className={classes.mediaIcons}>
        <div className={classes.facebookIcon}></div>
        <div className={classes.linkedinIcon}></div>
      </div>
      
      
    </div>
  )
}

export default Share