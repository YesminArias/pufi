import { HiArrowNarrowRight } from "react-icons/hi";
import classes from "./Newsletter.module.scss";
import React, { useState } from "react";
import { validacion } from "./validacion.jsx";
import  "../../index.scss";

export default function Newsletter() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  function onChange(e) {
    setCorreo(e.target.value);
  }

  function emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!correo || regex.test(correo) === false);
  }

  function onSubmit() {
    const  validacion = emailValidation();
    setIsEmailValid(validacion);
    const msj = validacion
      ? "se registro con exito!"
      : "Por favor ingrese correo valido!";
    setMensaje(msj);

    setCorreo("");
  }

  return (
    <div>
      <span className={classes.newsletter}>
        <span>
          <span className={classes.newsletter__title}>NEWSLETTER</span>
          <br />
          <p className={classes.newsletter__title__suscribite}>SUSCRIBITE</p>
          <br />
          <p className={classes.newsletter__title__suscribite__msj}>
            y enterate de todas las novedades
          </p>
          <br />
         
          <div className={classes.input}>
            <form className={classes.icon}>
              <div className={classes.icon}>
                <input
                  type="email"
                  name="email"
                  value={correo}
                  onChange={(e) => onChange(e)}
                  className="form-control"
                  placeholder="Ingresa tu email"
                />
              </div>
              <br />
              <HiArrowNarrowRight onClick={() => onSubmit()} />
            </form>
          </div>
          <span className={'alert' + (isEmailValid ? 'success' : 'danger')} >{mensaje}</span>
        </span>
        <br/>
        <br/>
        <br/>
      </span>
    </div>
  );
}
