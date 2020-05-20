import React, { useState, useEffect } from 'react'
import { SliderContainer } from './style'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'

function Slider(props) {
  const [slideSwiper, setSlideSwiper] = useState(null)
  const { list } = props
  useEffect(() => {
    if (list.length > 0 && !slideSwiper) {
      let swiper = new Swiper(".slider-container", {
        loop: true,
        pagination: {el:'.swiper-pagination'},
      })

      setSlideSwiper(swiper)
    }
  }, [list.length, slideSwiper])

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            list.map(slide => {
              return (
                <div className="swiper-slide">
                  <div className="swiper-slide__box">
                    <img src="https://via.placeholder.com/686x268" alt=""/>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)