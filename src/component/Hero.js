import React from 'react'
import classes from './Hero.module.css'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className={classes.hero}>
        <h1>Make my own AI Songs Covers!</h1>
        <p>The #1 Platform For Making High Quality AI covers In Seconds</p>

        <div>
            <div className={classes.search}>
            <CiSearch className={classes.icon} size={34}/><input type="text" placeholder='Search all voices'/></div>
            <ul>
                <li>Music</li>
                <li>Cartoon</li>
                <li>Anime</li>
                <li>Gaming</li>
                <li>Public Figure</li>
                <li>Music</li>
            </ul>
        </div>

    </div>
  )
}

export default Hero