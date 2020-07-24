import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    singers:[],
    loading:false,
    offset:0
})

export default ( state = defaultState, action )=>{
    switch(action.type){
        case actionTypes.CHANGE_SINGERS:
            return state.set('singers',action.data);
        case actionTypes.CHANGE_LOADING:
            return state.set('loading',action.data);
        case actionTypes.CHANGE_OFFSET:
            return state.set('offset',action.data);
        case actionTypes.CONCAT_SINGERS:
            let data = state.toJS()['singers'].concat(action.data)
            return state.set('singers',fromJS(data))
        default:
            return state
    }
}

