import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';

import classes from './Layout.module.css';
import Header from '../components/Navigation/Header/Header';
import BackgroundImage from '../components/BackgroundImage/BackgroundImage';
import InformSection from '../components/InformSection/InformSection';
import Footer from '../components/Footer/Footer'
import Navbar from '../containers/Navbar/Navbar'


class Layout extends React.Component {
    render() {
        return(
          <Router>
            <div className={classes.layout}>
              <Header />
              <BackgroundImage />
              <Navbar />
              <InformSection />
              <Footer />
            </div>     
          </Router>
        )
    }
}

export default Layout;
