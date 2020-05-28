import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

export const getBannerList = (data) => ({
  type: actionTypes.GET_BANNER,
  data: fromJS(data)
})


export const fetchBannerList = () => {
  return (dispatch) => {
    dispatch(getBannerList([0, 1, 2, 3, 4, 5, 6, 7]))
  }
}