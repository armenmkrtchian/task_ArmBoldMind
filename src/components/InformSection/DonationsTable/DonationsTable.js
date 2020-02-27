import React from 'react';

import classes from './DonationsTable.module.css';
import DonatorRow from './DonatorRow/DonatorRow';

const DonationsTable = () => {
  const donators = [
    {
      id: 1,
      name: 'Eleonora Saimon',
      imgPath: '../../../assets/imgs/eleanora.png',
      donate: '$60',
      year: '22 Oct 15:07'
    },
    {
      id: 2,
      name: 'Anna Smith',
      imgPath: '../../../assets/imgs/anna.png',
      donate: '$40',
      year: '22 Oct 15:07'
    },
    {
      id: 3,
      name: 'Roven Joseph Smith',
      imgPath: '../../../assets/imgs/roven.svg',
      donate: '$50',
      year: '22 Oct 15:07'
    },
    {
      id: 4,
      name: 'Eleonora Saimon',
      imgPath: '../../../assets/imgs/eleanora2.png',
      donate: '$70',
      year: '22 Oct 15:07'
    },
    {
      id: 5,
      name: 'Tontri Qutier',
      imgPath: '../../../assets/imgs/tontri.png',
      donate: '$80',
      year: '22 Oct 15:07'
    },
    {
      id: 6,
      name: 'Gillian Silence',
      imgPath: '../../../assets/imgs/gillian.png',
      donate: '$150',
      year: '22 Oct 15:07'
    },
  ]
  return (
    <div className={classes.DonationsTable}>  
      <div className={classes.donationsTitle}><h3>Donations</h3></div>
      {donators.map((donator) => {
        return  <DonatorRow 
             key={donator.id}
             name={donator.name}
             imgPath={donator.imgPath}
             donate={donator.donate}
             year={donator.year}
          />
        })
      }
    </div>
  )
}

export default DonationsTable