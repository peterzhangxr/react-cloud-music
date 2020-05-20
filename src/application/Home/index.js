import React from 'react'
import Slider from '../../components/slider'
import { Search } from './style'
function Home(props) {
  const bannerList = [0, 1, 2, 3]
  return (
    <div>
      <Search> 
        <div className="search-hd"></div>
        <div className="search-bd">
          <div className="search-bd__text">我相信 最近很火哦</div>
        </div>
        <div className="search-ft"></div>
      </Search>
      <Slider list={bannerList}></Slider>
    </div>
    
  )
}

export default React.memo(Home)