import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Slider from '../../components/slider'
import * as actions from './store/actionCreators';
import { Search } from './style'
function Home(props) {
  const { bannerList } = props
  const { getBannerDataDispatch } = props;

  useEffect (() => {
    getBannerDataDispatch();
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];

  return (
    <div>
      <Search> 
        <div className="search-hd"></div>
        <div className="search-bd">
          <div className="search-bd__text">我相信 最近很火哦</div>
        </div>
        <div className="search-ft"></div>
      </Search>
      <Slider list={bannerListJS}></Slider>
    </div>
    
  )

  // 映射 Redux 全局的 state 到组件的 props 上
  
}
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn (['home', 'bannerList']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch(actions.fetchBannerList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));