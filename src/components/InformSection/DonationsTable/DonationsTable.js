import React from 'react';

import classes from './DonationsTable.module.css';
import DonatorRow from './DonatorRow/DonatorRow';

const DonationsTable = () => {
  const donators = [
    {
      id: 1,
      name: 'Eleonora Saimon',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A9d3644d7-0e3b-41b1-b388-0a5f74d2a6f1&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      donate: '$60',
      year: '22 Oct 15:07'
    },
    {
      id: 2,
      name: 'Anna Smith',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3Ae15b02b0-a159-490e-a099-c9d885717d10&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      donate: '$40',
      year: '22 Oct 15:07'
    },
    {
      id: 3,
      name: 'Roven Joseph Smith',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A21264ce8-9f23-4eb7-b30b-0108dbb73c01&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      donate: '$50',
      year: '22 Oct 15:07'
    },
    {
      id: 4,
      name: 'Eleonora Saimon',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3Ad50e28d3-e9ab-442d-9818-82fe9621a2eb&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      donate: '$70',
      year: '22 Oct 15:07'
    },
    {
      id: 5,
      name: 'Tontri Qutier',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3Af9b7a30f-26cf-4425-8101-0b205ab89e4d&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      donate: '$80',
      year: '22 Oct 15:07'
    },
    {
      id: 6,
      name: 'Gillian Silence',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3Adbe7ab51-7f25-400e-85d5-3f4de68a5a39&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      donate: '$150',
      year: '22 Oct 15:07'
    },
  ]
  return (
    <div className={classes.DonationsTable}>  
      <div className={classes.donationsTitle}><h3>Donations</h3></div>
      {donators.map((donator) => {
          // console.log('777', donator.name)
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