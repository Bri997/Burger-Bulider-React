import React, { Fragment } from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "traslateY(0)" : "traslateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {" "}
      {props.children}
    </div>
  </Fragment>
);

export default modal;
