import React from 'react'
import css from './Footer.module.css'
// import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <div className={css.wrapper}>
      
      <div className={css.container}>
        <div className={css.left}>
       <span>Lets Work Together!</span>
        <div>Make an enquiry</div>
        </div>

        <div className={css.right}>
        
          <span>Links</span>
           <ul className={css.menu}>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Instagram</li>
            <li>Telegram</li> 
          </ul>
        </div>
      
      
    </div>
    <div className={css.line}>
        <div className={css.linewidth}></div>
      </div>
      <span className={css.footerText}>
      <span>AKASH NEGI</span>
     <span>||</span>
        <span>ALL RIGHT RESERVED 2023</span>
      </span>
    </div>
  );
};

export default Footer;