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
    width: 91.733333vw;
    padding-right: 6.13vw;
    padding-bottom: 12px;

    .box {
      display: flex;
      align-items: center;
    }
    .box + .box {
      margin-top: 10px;
    }
    .box-hd {
      width: 16vw;
      position: relative;
      display: flex;
      background: #f7f7f7;
      border-radius: 3px;
      overflow: hidden;
      
      &::after {
        content: '';
        padding-top: 100%;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .box-bd {
      flex: 1;
      overflow: hidden;
      padding: 0 10px;
    }

    .box-title {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: #999;
      }
    }

    .box-subtitle {
      font-size: 12px;
      color: #999;
      margin-top: 12px;
    }
    
  }
  
`