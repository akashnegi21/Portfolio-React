import React from 'react'
import css from './Testimonials.module.css'
import { useState } from 'react';
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const text=['Lorem1st ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique temporibus eum. Unde nemo recusandae excepturi ut beatae inventore',
'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique temporibus eum. Unde nemo recusandae excepturi ut beatae inventore',
'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique temporibus eum. Unde nemo recusandae excepturi ut beatae inventore',
'Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique temporibus eum. Unde nemo recusandae excepturi ut beatae inventore',
'Lorem5 ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique temporibus eum. Unde nemo recusandae excepturi ut beatae inventore',
'Lorem6 ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique temporibus eum. Unde nemo recusandae excepturi ut beatae inventore']
  return (
    <div className={css.wrapper}>
        <a id='testimonials'></a>
        <div className={css.container}>
             <div className={css.left}>
                <div className={css.upperLeft}>
                   <div className={css.testimonial1}>
                    <span>"</span>
                    <span>{text[currentIndex]}</span>
                    <span>Akash Negi</span>
                    <span>CEO OPCODE</span>
                    </div>
                            </div>
                <div className={css.lowerLeft}>
                <div className={css.btn}>
      <img src='./backward.svg' onClick={()=>{currentIndex<1 ? setCurrentIndex(1) : setCurrentIndex((prev)=>prev-1)}} alt=""/>
      <img src='./forward.svg' onClick={()=>{currentIndex>3 ? setCurrentIndex(4) : setCurrentIndex((prev)=>prev+1)}} alt=""/>
    
       </div> 
                </div>
            </div>
            <div className={css.right}>
                <div className={css.upperRight}>
                    <span>|| Testimonial</span>
                    <span>Satisfied Clients Say</span>
                </div>
                <div className={css.lowerRight}>
                    <div className={css.testimonial2}>
                    <span>"</span>
                    <span>{text[currentIndex+1]}</span>
                    <span>Akash Negi</span>
                    <span>CEO OPCODE</span>
                    </div>
                </div>
            </div> 
        </div>
  </div>
  )
}

export default Testimonials