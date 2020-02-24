import React from 'react';

import classes from './Header.module.css';


const Header = () => {

    return(
      <div className={classes.header}>
        <div className={classes.menuToggle}></div>
        <div className={classes.searchIcon}></div>
        <div className={classes.userIcon}></div>
      </div>
    )
}

export default Header;