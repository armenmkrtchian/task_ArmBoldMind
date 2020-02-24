import React from 'react';

import classes from './DonatorRow.module.css'
import Avatar from '../../../UIElements/Avatar/Avatar';

const DonatorRow = (props) => {

  return (
    <div className={classes.DonatorRow}>
     <div className={classes.Img}><Avatar imgPath={props.imgPath} name={props.name}/></div>
     <div className={classes.Year}>{props.year}</div>
     <div className={classes.Name}>{props.name}</div>
     <div className={classes.Donate}>{props.donate}</div>
    </div>
  )
}

export default DonatorRow