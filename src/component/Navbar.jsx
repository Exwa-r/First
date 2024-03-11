import React from 'react'
import Image from "../assets/react.svg"
import Vite from "../../public/vite.svg"
import classes from "./Navbar.module.css"

export default function Navbar() {
  return (
    <>
    <div>
        <img src={Image} alt="" />
        <img src={Vite} alt="" />
        <ul>
            <li className={classes.list} >Home</li>
            <li className={classes.list}>Support</li>
            <li className={classes.list}>Contact</li>
        </ul>
        
    </div>
    </>
  )
}
