import styled from 'styled-components'

export const SliderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  --swiper-pagination-color: #ff3a3a;
  .slider-container {
    padding: 0 4.26667vw;
  }
  .swiper-slide {
    width: 27.733333vw;
  }
  .swiper-slide__box {
    position: relative;
    display: flex;
    width: 100%;
    background: #f7f7f7;
    &:after {
      content: '';
      padding-top: 100%;
    }
    margin: 0 auto;
    background: #f7f7f7;
    border-radius: 5px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }

  .swiper-slide__text {
    font-size: 12px;
    color: #333;
    line-height: 1.5;
    display: -webkit-box ;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
  }
`