import React from 'react'
import { BiParagraph } from 'react-icons/bi'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.css'
const Experties = () => {
  return (
    <div className={css.wrapper}>
        <a href="" id='experties'></a>
        <div className={css.container}>
                <div className={css.left}>
                    {
                        projectExperience.map((exp,i)=>{
                            return (
                                <div className={css.exp} key={i}>
                                <div className={css.flexCenter} style={{background:exp.bg}} >
                                <exp.icon size={25} color='white' />
    </div>
                                    <div>
                                        <span>{exp.name}</span>
                                        <span className={css.secondaryText}>{exp.projects} projects</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
       <div className={css.right}>
        <span className={css.primaryText}>What Do I Help?</span>
        {
            WhatDoIHelp.map((paragraph,i)=>{
                return <span className={css.secondaryText} key={i}>
                    {paragraph}
                </span>

            })
        }
        <div className={css.stats}>
            <div className={css.stat}>
                <span className={css.primaryText}>285+</span>
                <span className={css.secondaryText}>Project Completed</span>
            </div>
            <div className={css.stat}>
                <span className={css.primaryText}>190+</span>
                <span className={css.secondaryText}>Happy Clients</span>
            </div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Experties