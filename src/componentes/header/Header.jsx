import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  RiShoppingBagLine,
  RiCheckboxBlankCircleLine,
  RiLink,
} from "react-icons/ri";
import { IoUmbrellaOutline } from "react-icons/io5";
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
/* import  { RiMenuFill } from "react-icons/ri"; */
import '../../index.scss';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../image/pexels-jaime-reimer-2662116.jpg";
import img1 from "../image/pexels-rachel-claire-7277033.jpg";
import img3 from "../image/pexels-roberto-nickson-2775196.jpg";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <div className={classes.container}>
     
      <div className={classes.header}>
        <div>
          <h1 className={classes.logo}>Pufi <AiOutlineTrademarkCircle className={classes.logo__icons}/></h1>
          
        </div>
        <ul className={classes.header__item}>
          <li className={classes.header__item__container}>
            <a href="#puff">
              <RiLink className={classes.icons} />
              <p className={classes.header__item__container__right}>PUFI PUFF</p>
            </a>
          </li>
          <li className={classes.header__item__container}>
            <a href="#rain">
              <IoUmbrellaOutline className={classes.icons} />
              <p className={classes.header__item__container__right}>PUFI RAIN</p>
            </a>
          </li>
          <li className={classes.header__item__container}>
            <a href="#cart">
              <RiShoppingBagLine className={classes.icons} />
              <p className={classes.header__item__container__right}>PUFI CART</p>
            </a>
          </li>
          <li className={classes.header__item__container__right}>
            <a href="#nap">
              <RiCheckboxBlankCircleLine className={classes.icons} />
              <p className={classes.header__item__container__right}>PUFI NAP</p>
            </a>
          </li>
        </ul>
        <div className="header">
          <span className={classes.header__item__container__right}>
            Mi cuenta
          </span>
          <IoIosArrowDown className={classes.icon} />
          <span className={classes.header__item__container__right__linea}>
            Mi compra
          </span>
        </div>
        {/*  <div><RiMenuFill/></div> */}
      </div>

      <div className={classes.mensaje}>
      <div>
        <p>
          ESTÁR CÓMODO,
          <br />
          NUNCA FUE TAN FÁCIL 
         
        </p>
        <button className={classes.buttonInicio}>SHOP</button>
        </div>

      </div>
      <Carousel className={classes.carousel}>
        <div>
          <img src={img1}  />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>

        
      </Carousel>
    </div>
  );
}
