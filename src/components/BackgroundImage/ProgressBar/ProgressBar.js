import React from 'react';
import classes from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.row1}>
          <div className={classes.progress_1}></div>
          <div className={classes.progress_2}></div>
          <div className={classes.progress_3}></div>
          <div className={classes.progress_4}></div>
          <div className={classes.progress_5}></div>
          <div className={classes.progress_6}></div>
      </div>
      <div className={classes.row2}>
        <div className={classes.workProgress}>Work progress<div> &nbsp;&nbsp;&nbsp;&nbsp;for 07 Nov</div></div>
        <div className={classes.collected}>Collected<div>$ 1132500</div></div>
      </div>
      
    </div>
  )
}

export default ProgressBar