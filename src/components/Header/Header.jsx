import React from 'react'
import css from './Header.module.css';
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import { getMenuStyles, head } from '../../utils/motion';
import { useState } from 'react';
const Header = () => {
    const [menuOpened,setMenuOpened]=useState(false)
  return (
    <div  className={css.wrapper}>
        <div className={css.container}>
            <div className={css.name}>
                AKASH NEGI
            </div>
            <ul className={css.menu}
            style={getMenuStyles(menuOpened)}
            >
                <li><a href="#about">About</a></li>
                <li><a href="#experties">Experties</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li> <div>
                    <span>+91 8171329954</span>
                    <BiPhoneCall size={'40px'}/></div>
                </li>
            </ul>
            {/* for medium and small screen */}
            <div className={css.menuIcon}
            onClick={()=>{setMenuOpened((prev)=>!prev)}}>
                <BiMenuAltRight size={30}/>
            </div>
        </div>

    </div>

  )
}

export default Header
