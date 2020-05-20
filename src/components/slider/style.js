import styled from 'styled-components'

export const SliderContainer = styled.div`
  position: relative;
  
  margin: 0 auto;

  .swiper-slide__box {
    position: relative;
    display: flex;
    width: 91.466667vw;
    &:after {
      content: '';
      padding-top: 39.07%;
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
`