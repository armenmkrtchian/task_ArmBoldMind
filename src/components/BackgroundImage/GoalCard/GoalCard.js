import React from 'react';

import classes from './GoalCard.module.css'
import DonatesNow from '../../UIElements/Buttons/DonatesNow'

const GoalCard = () => {
    return (
        <div className={classes.goalCard}>

            <span className={classes.title}>Goal</span>
            <p className={classes.count}>$ 1150000
                <span>of</span>
            </p>
            <p className={ classes.raisedCount}>$ 1132500 raised</p>
            <p className={classes.charity}>
                <span className={classes.star}>*</span>
                40% of required amount was donated
                <br/>&nbsp;&nbsp;&nbsp;by Charity
                <span className={ classes.foundation}>Foundation</span>
            </p>
            <form>
                <input type="text" id="donate" name="donate" placeholder="Donation amount"
                    className={classes.donationInput}/>
                <select id="currency" name="currency"
                    className={classes.currency}>
                    <option value="usd">USD</option>
                    <option value="euro">EURO</option>
                    <option value="amd">AMD</option>
                </select>
                
            </form>
            <DonatesNow/>
            <div className={classes.canHelp}>
                <span>Can help with anything else?</span>
                <br/>
                <span className={classes.moreAbout}>More about it</span>
            </div>
        </div>
    )
}

export default GoalCard
