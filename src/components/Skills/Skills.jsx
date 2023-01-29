import React from 'react'
import css from './Skills.module.css'
const Skills = () => {
  return (
    <div className={css.wrapper}>
        <a href="" id="skills"></a>
        <div className={css.container}>
            <div className={css.left}>
               <div className={css.leftText}>
                <span>||  Special skills</span>
                <span>My Special Skill Field Here</span>
                </div>
               <div className={css.btn}><span>Get Resume</span>
               <div className={css.imgSvg}>
                <img src='./download.svg' height={24} width={25} alt="" />
               </div></div>
        


      </div>         

            <div className={css.right}>

                <div className={css.rightbox}>
                <div className={css.progressDiv}>
           <div className={css.skillDiv}>
            <span>WebDevelopent</span>
            <span>80%</span></div>   
            <div className={css.outerProgressBar}>
                <div className={css.innerProgressBar} style={{width:'80%'}}></div>
            </div>
            </div>

            <div className={css.progressDiv}>
           <div className={css.skillDiv}>
            <span>Blockchain</span>
            <span>75%</span></div>   
            <div className={css.outerProgressBar}>
                <div className={css.innerProgressBar} style={{width:'75%'}}></div>
            </div>
            </div>

            <div className={css.progressDiv}>
           <div className={css.skillDiv}>
            <span>Machine Learning</span>
            <span>90%</span></div>   
            <div className={css.outerProgressBar}>
                <div className={css.innerProgressBar} style={{width:'90%'}}></div>
            </div>
            </div>


            <div className={css.progressDiv}>
           <div className={css.skillDiv}>
            <span>Javascript</span>
            <span>78%</span></div>   
            <div className={css.outerProgressBar}>
                <div className={css.innerProgressBar} style={{width:'78%'}}></div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills