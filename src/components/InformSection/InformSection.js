import React from 'react';

import { Route } from 'react-router-dom';

import classes from './InformSection.module.css';
import About from './About/About';
import Comments from './Comments/Comments';
import Uptades from './Uptades/Uptades';
import Gallery from './Gallery/Gallery';


const InformSection = () => {
  return (
          <div className={classes.informSection}>
              <Route path="/about" component={About} />
              <Route path="/comments" component={Comments} />
              <Route path="/uptades" component={Uptades} />
              <Route path="/gallery" component={Gallery} />
          </div>
  )
}

export default InformSection