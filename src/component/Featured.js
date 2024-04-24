import React from "react";
import classes from "./Featured.module.css";
import Card from "./UI/Card";

const cardItems = [
  {
    id: 1,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 2,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 3,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 4,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 5,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 6,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 7,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 8,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
  {
    id: 9,
    scr: "/asset/imageman.png",
    alt: "this is a image of man",
    heading: "Juice World (Better)",
    p: "15.5K views 285 likes Logpama",
  },
];

const Featured = () => {
  return (
    <>
      <div className={classes.Featured}>
        <h1>Featured AI Voices</h1>
        <div>
          <button>View all</button>
        </div>
      </div>
      <div className={classes.cards}>
        {cardItems.map((card) => (
          <Card
            key={card.id}
            src={card.scr}
            alt={card.alt}
            heading={card.heading}
            p={card.p}
          />
        ))}
      </div>
    </>
  );
};

export default Featured;
