import React from 'react';
import classes from './Avatar.module.css';
import eleanoraImagePath from "../../../assets/imgs/eleanora.png"
import annaImagePath from "../../../assets/imgs/anna.png"
import rovenImagePath from "../../../assets/imgs/roven.svg"
import eleanora2ImagePath from "../../../assets/imgs/eleanora2.png"
import tontriImagePath from "../../../assets/imgs/tontri.png"
import gillianImagePath from "../../../assets/imgs/gillian.png"
import adamImagePath from "../../../assets/imgs/adam.png"
import jamesImagePath from "../../../assets/imgs/james.png"
import andrewImagePath from "../../../assets/imgs/andrew.png"
import elisabethImagePath from "../../../assets/imgs/elisabeth.png"
import james2ImagePath from "../../../assets/imgs/james2.png"
import andrew2ImagePath from "../../../assets/imgs/andrew2.png"
import annaJeffersonImagePath from "../../../assets/imgs/annaJefferson.png"


console.log(111,eleanoraImagePath)
// I can't download image in local space (maybe webpack config problem), but it's downloaded of internet!!!

const Avatar = props => {
  console.log(777,props.imgPath)

  const eleanora = "../../../assets/imgs/eleanora.png"
  const anna = "../../../assets/imgs/anna.png"
  const roven = "../../../assets/imgs/roven.svg"
  const eleanora2 = "../../../assets/imgs/eleanora2.png"
  const tontri = "../../../assets/imgs/tontri.png"
  const gillian = "../../../assets/imgs/gillian.png"
  const adam = "../../../assets/imgs/adam.png"
  const james = "../../../assets/imgs/james.png"
  const andrew = "../../../assets/imgs/andrew.png"
  const elisabeth = "../../../assets/imgs/elisabeth.png"
  const james2 = "../../../assets/imgs/james2.png"
  const andrew2 = "../../../assets/imgs/andrew2.png"
  const annaJefferson = "../../../assets/imgs/annaJefferson.png"
  

  const renderfunc = () => {
    
    let imagePath 
    
    if(eleanora === props.imgPath) {
      imagePath = eleanoraImagePath
    } else if (anna === props.imgPath) {
      imagePath = annaImagePath
    } else if (roven === props.imgPath) {
      imagePath = rovenImagePath
    } else if (eleanora2 === props.imgPath) {
      imagePath = eleanora2ImagePath
    } else if (tontri === props.imgPath) {
      imagePath = tontriImagePath
    } else if (gillian === props.imgPath) {
      imagePath = gillianImagePath
    } else if (adam === props.imgPath) {
      imagePath = adamImagePath
    } else if (james === props.imgPath) {
      imagePath = jamesImagePath
    } else if (andrew === props.imgPath) {
      imagePath = andrewImagePath
    } else if (elisabeth === props.imgPath) {
      imagePath = elisabethImagePath
    } else if (james2 === props.imgPath) {
      imagePath = james2ImagePath
    } else if (andrew2 === props.imgPath) {
      imagePath = andrew2ImagePath
    } else if (annaJefferson === props.imgPath) {
      imagePath = annaJeffersonImagePath
    } else {
      imagePath = props.name
    }
   return <img src={imagePath} alt={props.name}/>
  }

  return (
    <div className={classes.avatarName} style={props.style}>
     {renderfunc()}
  </div>
  )
}

export default Avatar