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
      imgPath: '../../../assets/imgs/adam.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 2,
      name: 'James Stewart',
      comment: '',
      imgPath: '../../../assets/imgs/james.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 3,
      name: 'Andrew Ralphen-Sow',
      comment: 'Lets get together!!!',
      imgPath: '../../../assets/imgs/andrew.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 4,
      name: 'Elisabeth Jefferson',
      comment: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
      imgPath: '../../../assets/imgs/elisabeth.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 5,
      name: 'Adam Smith',
      comment: 'Very good job!',
      imgPath: '../../../assets/imgs/adam.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 6,
      name: 'James Stewart',
      comment: 'I am glad that some foundation is trying to make our city more beautiful',
      imgPath: '../../../assets/imgs/james2.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 7,
      name: 'Andrew Ralphen-Sow',
      comment: 'Lets get together!!!',
      imgPath: '../../../assets/imgs/andrew2.png',
      year: 'Oct 29 16:47'
    },
    {
      id: 8,
      name: 'Anna Jefferson',
      comment: 'Our city need this changes! I gave donated 50$ and will tell my friend to participate in this campaigns too',
      imgPath: '../../../assets/imgs/annaJefferson.png',
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