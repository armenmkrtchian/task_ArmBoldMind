import React from 'react';

import classes from './Comments.module.css';
import DonationsTable from '../DonationsTable/DonationsTable'
import UserComment from './Comment/UserComment';


const Comments = () => {
  const userComments = [
    {
      id: 1,
      name: 'Adam Smith',
      comment: 'Very good job!',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A23d97612-4f64-4b98-a9bc-20c0482875bd&params=version%3A0&token=1582572695_da39a3ee_e00c2b97617cc9762e10ee52e995e8b4db1cfe98&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 2,
      name: 'James Stewart',
      comment: '',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A57f6f592-6f35-443e-a9e9-054e2e76f6e7&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 3,
      name: 'Andrew Ralphen-Sow',
      comment: 'Lets get together!!!',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A2fbbe1c4-e382-4d16-b39e-5a9e84df69b3&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 4,
      name: 'Elisabeth Jefferson',
      comment: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A4b59550d-395c-4af3-87a7-e65e810586c0&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 5,
      name: 'Adam Smith',
      comment: 'Very good job!',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A23d97612-4f64-4b98-a9bc-20c0482875bd&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 6,
      name: 'James Stewart',
      comment: 'I am glad that some foundation is trying to make our city more beautiful',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3Afd02aa97-5a7e-45af-bdd6-532c8ccd64d4&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 7,
      name: 'Andrew Ralphen-Sow',
      comment: 'Lets get together!!!',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A182a53d0-780f-49ed-ac01-3560d0a57838&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
    {
      id: 8,
      name: 'Anna Jefferson',
      comment: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
      imgPath: 'https://public-v2links.adobecc.com/af4f3ca4-5701-4426-75bf-591678398d77/component?params=component_id%3A280f82ee-3647-4560-8478-ab6734343a4c&params=version%3A0&token=1582603279_da39a3ee_fb61b98c609029f6ee6e09a871b47ffab5e5a931&api_key=CometServer1',
      year: 'Oct 29 16:47'
    },
  ]
  return (
    <div className={classes.Comments}>
      
      <div className={classes.comments}>
        <div className={classes.writeComment}>
          <div className={classes.avatar}></div>
          <div className={classes.input}>
            <input type="text" placeholder="Write your comment..." size="100"/> 
            <div className={classes.uploadedImage}>+ Upload image</div>
          </div>
        </div>
            
        <p><strong>46 comments</strong></p>
        {
          userComments.map((comment) => {
            return <UserComment 
              key={comment.id}
              id={comment.id}
              name={comment.name}
              comment={comment.comment}
              imgPath={comment.imgPath}
              year={comment.year}
            />
          })
        }
        <div className={classes.buttonLoad}><button>Load more comments</button></div>
      </div>
      <div className={classes.don}>
        <DonationsTable />
      </div>
    </div>
  )
}

export default Comments