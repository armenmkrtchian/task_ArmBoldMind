import React from 'react';

import classes from './About.module.css';
import Description from './Description/Description';
import DonationsTable from '../DonationsTable/DonationsTable';

const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.description}>
        <Description/>
      </div>
      <div className={classes.don}>
        <DonationsTable />
      </div>
    </div>
  )
}

export default About