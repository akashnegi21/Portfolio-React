import React from 'react'
import css from './Hero.module.css';
const Hero = () => {
  return (
    <div className={css.wrapper}>

    <div className={css.container}>
        <div className={css.upper}>
            <span className={css.primaryText1}>Hello There,<br/> I'm Akash.</span>
            <span className={css.secondaryText1}> i design beautiful simple<br/> things, And I love what i do </span>
        </div>

        <div className={css.person}>
            <img src="./person.png" alt="" />

        </div>

        {/* email */}
        <a className={css.email} href="mailto:negiakash41@gmail.com">Email me- </a>

        <div className={css.lower}>
            <div className={css.experience}>
                <div className={css.primaryText}>10</div>
                <div className={css.secondaryText}>
                <div>Years</div>
            <div>Experience</div>
                </div>
            </div>

            <div className={css.certificate}>
                <img src='./certificate.png' alt=''/>
                <span>CERTIFIED</span>
                <span>UI/UX DESIGNER</span>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Hero