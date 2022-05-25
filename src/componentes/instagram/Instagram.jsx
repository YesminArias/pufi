import React from "react";
import classes from './Instagram.module.scss';
import img1 from './../image/Captura1.JPG';
import img2 from './../image/Captura2.JPG';
import img3 from './../image/Captura3.JPG';
import img4 from './../image/Captura4.JPG';
import img5 from './../image/Captura5.JPG';
import img6 from './../image/Captura6.JPG';

export default function Instagram() {

  
  return (
    <div className={classes.instagram}>
        <div>
     <p  className={classes.title}>INSTAGRAM </p>
     <a href='https://www.instagram.com/photoexpeditionpatagonia/'>
     <h2 className={classes.title__numeral} >#ESPUFI</h2>
     <div className={classes.instagram} >
         <img className={classes.instagram__img}  src={img1}/>
         <img  className={classes.instagram__img} src={img2}/>
         <img className={classes.instagram__img}  src={img3}/>
     </div>
     <div className={classes.instagram}>
         <img className={classes.instagram__img} src={img4}/>
         <img  className={classes.instagram__img} src={img5}/>
         <img  className={classes.instagram__img}  src={img6}/>
     </div>
     </a>
     
     </div>
     
    </div>
  );
}
