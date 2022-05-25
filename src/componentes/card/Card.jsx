import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import classes from "./Card.module.scss";

const Card = () => {
  return (
    <div className={classes.container}>
      <div id="rain" className={classes.cardContainer}>
        <div className={classes.cardContainer__container}>
          <div className={classes.cardContainer__container__mini}>
            <img
              src="https://cdna.4imprint.co.uk/prod/extras/503320/90946/700/1.jpg"
              width="150"
            />
            <h1>Pufi RAIN </h1>
            <br />
          </div>
          <div>
            <p>
              Descripcion del producto. Este es <br /> un texto simulado
            </p>
          </div>
          <br />
          <div className={classes.acceso}>
            {" "}
            <p>
              {" "}
              <MdOutlineKeyboardArrowRight /> VER MAS{" "}
            </p>{" "}
          </div>
        </div>
        <div className={classes.cardContainer__container__img}>
          <div className={classes.hero}>
            <img
              className={classes.imgProducto}
              src="https://threadcurve.com/wp-content/uploads/2020/08/types-of-umbrellas-Aug272020-1-min.jpg"
              alt=""
            />
            <button className={classes.buttonProducto}>SHOP</button>
          </div>
        </div>
      </div>

      <div id="puff" className={classes.cardContainer}>
        <div className={classes.cardContainer__container}>
          <div className={classes.hero}>
            <img
              className={classes.imgProducto}
              src="https://i.pinimg.com/originals/7a/bc/81/7abc81cd917b20414bc379d365319bdc.jpg"
              alt=""
            />
            <button className={classes.buttonProducto}>SHOP</button>
          </div>
        </div>

        <div className={classes.cardContainer__container}>
          <div className={classes.cardContainer__container__mini}>
            <img
              src="https://i.linio.com/p/fce86e5fab0fd49be487fc55006bbb08-product.webp"
              width="150"
            />
            <h1>Pufi PUFF </h1>
            <br />
          </div>
          <div>
            <p>
              Descripcion del producto. Este es <br /> un texto simulado
            </p>
          </div>
          <br />
          <div className={classes.acceso}>
            {" "}
            <p>
              {" "}
              <MdOutlineKeyboardArrowRight /> VER MAS{" "}
            </p>{" "}
          </div>
        </div>
      </div>

      <div id="cart" className={classes.cardContainer}>
        <div className={classes.cardContainer__container}>
          <div className={classes.cardContainer__container__mini}>
            <img
              src="https://s7.orientaltrading.com/is/image/OrientalTrading/FXBanner_808/large-primary-color-shopping-tote-bags-50-pc-~13774864.jpg"
              width="150"
            />
            <h1>Pufi CART </h1>
            <br />
          </div>
          <div>
            <p>
              Descripcion del producto. Este es <br /> un texto simulado
            </p>
          </div>
          <br />
          <div className={classes.acceso}>
            {" "}
            <p>
              {" "}
              <MdOutlineKeyboardArrowRight /> VER MAS{" "}
            </p>{" "}
          </div>
        </div>
        <div className={classes.cardContainer__container}>
          <div className={classes.hero}>
            <img
              className={classes.imgProducto}
              src="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?k=20&m=1254508881&s=612x612&w=0&h=d6KO9oMB3cMLGSFEu5GoGbYX0RpkHSEoUCARo7UagTI="
              alt=""
            />
            <button className={classes.buttonProducto}>SHOP</button>
          </div>
        </div>
      </div>

      <div id="nap" className={classes.cardContainer}>
        <div className={classes.cardContainer__container}>
          <div className={classes.hero}>
            <img
              className={classes.imgProducto}
              src="https://www.todaysparent.com/wp-content/uploads/2016/09/agebyageguidetonaps1280x960.jpg"
              alt=""
            />
            <button className={classes.buttonProducto}>SHOP</button>
          </div>
        </div>

        <div className={classes.cardContainer__container}>
          <div className={classes.cardContainer__container__mini}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81OtPMu0GNL._SX522_.jpg"
              width="150"
            />
            <h1>Pufi NAP </h1>
            <br />
          </div>
          <div>
            <p>
              Descripcion del producto. Este es <br /> un texto simulado
            </p>
          </div>
          <br />
          <div className={classes.acceso}>
            {" "}
            <p>
              {" "}
              <MdOutlineKeyboardArrowRight /> VER INFO{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
