import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide]= useState(0)
   const length = slides.length

   const nextSlide = () =>{
       setCurrentSlide(currentSlide === length -1 ? 0 : currentSlide + 1)
   }

   const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? length -1  :currentSlide - 1) }

    // if (!Array.isArray(slides) || slides.length <=0){
    //     return null
    // }

    return (
       
        <div className= "main">
<div className="btns">
            <FaArrowAltCircleLeft className="left" onClick={ prevSlide } />
            <FaArrowAltCircleRight className="right"  onClick={ nextSlide }/>
</div>

           <div className="slider">
            {SliderData.map((slide, index)=> {
return(
    <div 
    className ={index === currentSlide ? 'slide active': "slide"} key={index}
    >
        {index === currentSlide && (
        <img src={slide.image} alt ="venomous snakes" className ="image" />
        )}
    </div>
   
)
            })}
            </div>
            </div>
    )
}

export default ImageSlider
