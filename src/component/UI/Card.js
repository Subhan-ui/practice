import classes from "./Card.module.css";
import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div className={classes.card}>
        <Image
          src={props.src}
          alt={props.alt}
          width={250}
          height={250}
          className={classes.img}
        />
        <h5>{props.heading}</h5>
        <p>{props.p}</p>
      </div>
    </>
  );
};

export default Card;
