import React, {Component} from "react";

import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import DonatesNow from "../../components/UIElements/Buttons/DonatesNow";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        
        const currentScrollPos = window.pageYOffset;
        const visible = currentScrollPos > 914;

        this.setState({prevScrollpos: currentScrollPos, visible});
    };

    render() {

        const visibleOrInvisible = !this.state.visible ? classes.invisible : null 
        const nav = !this.state.visible ? classes.Navbar1 : classes.Navbar2

        return (
                    <ul className={[nav, classes.navlinks].join(' ')}>
                        <li className={classes.about}>
                            <NavLink to="/about"><p>About</p></NavLink>
                        </li>
                        <li className={[visibleOrInvisible, classes.uptades].join(' ')}>
                            <NavLink to="/uptades" ><p>Uptades</p></NavLink></li>
                        <li className={[visibleOrInvisible, classes.gallery].join(' ')}>
                            <NavLink to="/gallery" ><p>Gallery</p></NavLink></li>
                        <li className={classes.comments}>
                            <NavLink to="/comments" ><p>Comments</p></NavLink>
                        </li>
                        <li className={classes.finishDate}><span>25 Nov</span>
                            <div className={classes.finish}>Finish</div>
                        </li>
                        <li className={classes.donatorsQuantity}><span>1982</span>
                            <div className={classes.donators}>Donators</div>
                        </li>
                        <li className={[visibleOrInvisible, classes.donatesnow].join(' ')}>
                            <DonatesNow/>
                        </li>
                    </ul> 
        );
    }
}

export default Navbar
