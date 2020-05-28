import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Slider from '../../components/slider'
import SliderGrid from '../../components/sliderGrid'
import SliderColumn from '../../components/sliderColumn'
import * as actions from './store/actionCreators';
import { Page, Search, Panel } from './style'
function Home(props) {
  const { bannerList } = props
  const { getBannerDataDispatch } = props;

  useEffect (() => {
    getBannerDataDispatch();
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const columnListJS = [];
  for (let i = 0; i < bannerListJS.length; i += 3) {
    columnListJS.push(bannerListJS.slice(i, i + 3))
  }

  return (
    <Page>
      <Search> 
        <div className="search-hd"></div>
        <div className="search-bd">
          <div className="search-bd__text">我相信 最近很火哦</div>
        </div>
        <div className="search-ft"></div>
      </Search>
      <Slider list={bannerListJS} ref={ React.createRef() }></Slider>
      <div className="tools">
        <div className="tools-box">
          <div className="tools-box__icon"></div>
          <div className="tools-box__text">每日推荐</div>
        </div>
        <div className="tools-box">
          <div className="tools-box__icon"></div>
          <div className="tools-box__text">歌单</div>
        </div>
        <div className="tools-box">
          <div className="tools-box__icon"></div>
          <div className="tools-box__text">排行榜</div>
        </div>
        <div className="tools-box">
          <div className="tools-box__icon"></div>
          <div className="tools-box__text">电台</div>
        </div>
        <div className="tools-box">
          <div className="tools-box__icon"></div>
          <div className="tools-box__text">直播</div>
        </div>
      </div>
      <Panel>
        <div className="panel-hd">
          <div className="panel-hd__title">懂你的精选歌单</div>
          <div className="panel-hd__ft">查看更多</div>
        </div>
        <div className="panel-bd">
          <SliderGrid list={bannerListJS} ref={ React.createRef() }></SliderGrid>
        </div>
      </Panel>
      <Panel>
        <div className="panel-hd">
          <div className="panel-hd__title">你在找的好听华语歌</div>
          <div className="panel-hd__ft">播放全部</div>
        </div>
        <div className="panel-bd">
          <SliderColumn list={columnListJS} ref={ React.createRef() }></SliderColumn>
        </div>
      </Panel>
    </Page>
    
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