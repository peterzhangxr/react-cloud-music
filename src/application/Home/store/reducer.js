import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  bannerList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_BANNER:
      return state.set('bannerList', action.data)
    default:
      return state
  }
}