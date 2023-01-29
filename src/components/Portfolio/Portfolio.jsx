import React, { useState } from 'react';
import css from './Portfolio.module.css';
// import back from '../../../public/backward.svg'
// import next from '../../../public/forward.svg'
const Portfolio=() =>{
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80.jpg',
    'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80.jpg',
    'https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1674117171277-4a549940d175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1674062284960-e9d26046568e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    
  ];
  const incQuan=()=>{
    currentIndex>3 ? setCurrentIndex(4) : setCurrentIndex((prev)=>prev+1)
  
    // :quantity===1 ? null:setQuantity((prev)=>prev-2);
  }
  const decQuan=()=>{
    currentIndex<1 ? setCurrentIndex(0): setCurrentIndex((prev)=>prev-1)
  }
  return (
    <div className={css.wrapper}>
      <a href="" id='portfolio'></a>
      <div className={css.container}>
        <div className={css.upper}>
        <div className={css.portfolioText}>
          <span>|| Awesome Portfolio</span>
          <span>My Complete Portfolio</span>
        </div>
        <div className={css.btn}>
      <img src='./backward.svg' onClick={decQuan}></img>
      <img src='./forward.svg'  onClick={incQuan}></img>
      
      </div>  
        </div>
        <div className={css.imageWrapper}>
        <div className={css.firstImg}>      
        <img src={images[currentIndex]} alt='carousel'/>
        </div>
        <div className={css.secondImg}>  <img src={images[currentIndex+1]} alt='carousel' /></div>

      </div>
      
    </div></div>
  );
}
export default Portfolio;