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
        spaceBetweendd: 0,
      })

      setSlideSwiper(swiper)
    }
  }, [list.length, ref, slideSwiper])

  return (
    <SliderContainer>
      <div ref={ref} className="slider-container">
        <div className="swiper-wrapper">
          {
            list.map((items, idx) => {
              return (
                <div key={idx} className="swiper-slide">
                  {
                    items.map((slide) => {
                      return (
                      <div key={slide} className="box">
                        <div className="box-hd">
                          <img src="https://via.placeholder.com/120x120" alt=""/>
                        </div>
                        <div className="box-bd">
                          <div className="box-title">Wolves - <span>Selena Gomez/MarchSelena Gomez/March</span></div>
                          <div className="box-subtitle">赛琳娜因此取得itunes榜第一</div>
                        </div>
                        <div className="box-ft"></div>
                      </div>
                      )
                    })
                  
                  }
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