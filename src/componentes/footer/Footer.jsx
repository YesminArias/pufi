import React from "react";
import classes from "./Footer.module.scss";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

export default function Footer() {
  return (
    <div>
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>
            Pufi
            <AiOutlineTrademarkCircle className={classes.icons__logo} />
          </h1>
        </div>
        <div className={classes.container__block}>
          <ul>
            <li>
              {" "}
              <a className={classes.text} href="#rain">
                PUFI RAIN{" "}
              </a>
            </li>
            <a href="#puff">
              {" "}
              <li className={classes.text}>PUFI PUFF</li>
            </a>
            <a href="#cart">
              {" "}
              <li className={classes.text}>PUFI CART</li>
            </a>
            <a href="#nap">
              {" "}
              <li className={classes.text}>PUFI NAP</li>
            </a>
          </ul>
        </div>
        <div className={classes.container__block}>
          <ul>
            <a href="">
              {" "}
              <li className={classes.text}>CONTACTO</li>{" "}
            </a>
            <a href="">
              {" "}
              <li className={classes.text}>AYUDA</li>{" "}
            </a>
            <a href="">
              {" "}
              <li className={classes.text}>COMO COMPRAR</li>{" "}
            </a>
            <a href="">
              {" "}
              <li className={classes.text}>TERMINOS & CONDICIONES</li>{" "}
            </a>
          </ul>
        </div>
        <div className={classes.container__block}>
          <ul>
            <li>
              COMPRA 100% SEGURA
              <br />
              <br />
              <div className={classes.container__block__security}>
                <MdOutlineSecurity className={classes.icons} />
                <p>
                  COMPRA CON <br />
                  LA GARANTIA <br /> DE PUFI
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.container__block__security__redes}>
          <ul>
            <li className={classes.iconosRedes}>
              SEGUINOS EN
              <a href="" className={classes.text}>
                {" "}
                <FaFacebookF />
              </a>
              <a href="" className={classes.text}>
                {" "}
                <FaTwitter />
              </a>
              <a href="" className={classes.text}>
                {" "}
                <TiSocialInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={classes.text__mensaje}>
        {" "}
        PUFI Copyright 2017- Todos los derechos reservados{" "}
      </p>
    </div>
  );
}
