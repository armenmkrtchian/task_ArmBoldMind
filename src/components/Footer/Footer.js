import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.contact}>
                <ul>
                    <li>Tel:&nbsp;&nbsp;&nbsp;&nbsp;+3740111111</li>
                    <li>Mail:&nbsp;&nbsp;&nbsp;&nbsp;charity@gmail.com</li>
                </ul>
            </div>
            <div className={classes.company}>
                <h3>Company</h3>
                <ul>
                    <li >Home</li>
                    <li>Projects</li>
                    <li>Comunity</li>
                    <li>About us</li>
                    <li>News</li>
                </ul>
            </div>
            <div className={classes.helpandsupport}>
                <h3>Help and Support</h3>
                <ul>
                    <li>FAQ</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy policy</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className={classes.followus}>
                <h3>Follow us in social</h3>
                <ul>
                    <li>
                        <ul className={classes.mediaIcons}>
                            <li className={classes.facebookIcon}>
                                <i></i>
                            </li>
                            <li className={classes.twitterIcon}>
                                <i></i>
                            </li>
                            <li className={classes.linkedinIcon}>
                                <i></i>
                            </li>
                            <li className={classes.instagramIcon}>
                                <i></i>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={classes.subscribeEmail}>
                            <p>Subscribe for new projects</p>
                            <form className={classes.subscribeForm}>
                                
                                <input type="text" id="fname" name="firstname" placeholder="Your email"/>
                                <div className={classes.iconArrow}></div>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={classes.address}>
                <p>Address Line, Yerevan, RA, 374154</p>
            </div>
        </div>
    )
}

export default Footer
