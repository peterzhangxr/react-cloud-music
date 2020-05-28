import React, { useState, useEffect } from 'react'
import { SliderContainer } from './style'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'

const SliderGrid = React.forwardRef((props, ref) => {
  const [slideSwiper, setSlideSwiper] = useState(null)
  const { list } = props

  useEffect(() => {
    if (list.length > 0 && !slideSwiper) {
      let swiper = new Swiper(ref.current, {
        slidesPerView: 'auto',
        spaceBetween: 10,
      })

      setSlideSwiper(swiper)
    }
  }, [list.length, ref, slideSwiper])

  return (
    <SliderContainer>
      <div ref={ref} className="slider-container">
        <div className="swiper-wrapper">
          {
            
            list.map(slide => {
              return (
                <div key={slide} className="swiper-slide">
                  <div className="swiper-slide__box">
                    <img src="https://via.placeholder.com/208x208" alt=""/>
                  </div>
                  <div className="swiper-slide__text">今天从《好想爱这个世界啊》听起｜私人雷达</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </SliderContainer>
  )
})

export default React.memo(SliderGrid)