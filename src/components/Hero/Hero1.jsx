import React from 'react'
import css from './Hero1.module.css'
const Hero1 = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.left}>
                <span>Hello! I'm</span>
                <span>Akash Negi</span>
                <span>UI/UX designer specializing in shopify &webflow</span>
                <br/>
                <div className={css.btnWrapper}>
                       <span> Get Resume</span>
                       <img src='./download.svg' height={24} width={25} alt="" />
                </div>
                <br/>
                <div className={css.btnWrapper1}>
                <img src='./forward.svg' />
                </div>
                            <br/>
            </div>
            <div className={css.right}>
                <div className={css.heroImg}>
                    <img src='./hero.png' alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero1