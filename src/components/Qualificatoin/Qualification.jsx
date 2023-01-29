import React from 'react'
import css from './Qualification.module.css'
const Qualification = () => {
  return (
    <div className={css.wrapper}>
        <a href="" id="about"></a>
        <div className={css.container}>
            <div className={css.left}>
                <div className={css.imgWrapper}>
                    <img src='/modi.png' alt=""/>
                </div>
            </div>
            <div className={css.right}>
                <div className={css.head}>
                    <span>||About Me</span>
                    <span>Creative Independent Web Developer based in Australia</span>
                </div>
                <div className={css.aboutHead}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum odit, blanditiis fugiat pariatur debitis repudiandae odio, id quas vero
                    et consectetur adipisicing elit. Maxime ipsum odit, blanditiis fugiat pariatur debitis repudiandae odio</span><span> id quas veroet consectetur adipisicing elit. Maxime ipsum odit, blanditiis fugiat pariatur debitis repudiandae odio, id quas vero ducimus! </span>
                </div>
                <div className={css.btnWrapper}>
                    <button>Download CV</button>
                </div>
            </div>
        </div>
      
        </div>
    
  )
}

export default Qualification