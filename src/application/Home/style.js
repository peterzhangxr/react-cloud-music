import styled from 'styled-components'
import IconSearch from '../../assets/images/topbar_icn_search.png'

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