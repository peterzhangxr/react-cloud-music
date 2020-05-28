import styled from 'styled-components'
import IconSearch from '../../assets/images/topbar_icn_search.png'

export const Page = styled.div`

  .tools {
    display: flex;
    justify-content: space-between;
    width: 91.466667vw;
    margin: 16px auto 0;
  }

  .tools-box {
    text-align: center;
  }
  .tools-box__icon {
    width: 12.26666667vw;/*92/7.5vw*/
    position: relative;
    display: flex;
    border-radius: 50%;
    background: -webkit-linear-gradient(left, #ff5e51, #ff1e13);
    &::after {
      content: '';
      padding-top: 100%;
    }
  }
  .tools-box__text {
    font-size: 12px;
    color: #333;
    margin-top: 10px;
  }
`

export const Search = styled.div`
  display: flex;
  padding: 4px 16px;
  .search-bd {
    flex: 1;
    background: #f7f7f7;
    border-radius: 100px;
    line-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #c6c6c6;
  }

  .search-bd__text {
    padding-left: 20px;
    background: url(${IconSearch}) no-repeat left center;
    background-size: 14px 14px;
  }
`

export const Panel = styled.div`
  margin-top: 35px;
  .panel-hd {
    display: flex;
    align-items: center;
    padding: 0 4.26667vw;
    margin-bottom: 12px;
  }
  .panel-hd__title {
    font-size: 18px;
    color: #000;
    font-weight: bold;
    flex: 1;
  }
  .panel-hd__ft {
    font-size: 13px;
    color: #000;
    border: 1px solid #e6e6e6;
    border-radius: 50px;
    padding: 6px 12px;
  }
`