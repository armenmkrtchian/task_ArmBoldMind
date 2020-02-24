import React from 'react';

import classes from './BackgroundImage.module.css';
import GoalCard from './GoalCard/GoalCard'
import ProgressBar from './ProgressBar/ProgressBar';

const BackgroundImage = () => {
  return (
    <div className={classes.backgroundImage}>
      <div className={classes.goalCard}><GoalCard/></div>
      <div className={classes.progressBar}>
        <div className={classes.mapIcon}>Yerevan, Armenia</div>
        <div><span className={classes.progressBarTitle}>Gyumri Hospital Reconstruction</span></div>
        <div className={classes.bookmarkIcon}>Save project</div>
        <div><ProgressBar/></div>
      </div>
    </div>
  )
}

export default BackgroundImage